import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "qr-scanner";
import generateDate from "../Utils/GenerateData";
import VehicleDetails from "../components/common/VehicleDetails";

export default function QrCodeScanner() {
	const [result, setResult] = useState(null);
	const videoRef = useRef(null);
	const [responsibleForService, setResponsibleForService] = useState("");

	let navigate = useNavigate();

	// escaneia o qr code
	useEffect(() => {
		const startScanner = async () => {
		  try {
			const hasCamera = await QrScanner.hasCamera();
			if (!hasCamera) {
			  throw new Error("Camera not found.");
			}
			const qrScanner = new QrScanner(videoRef.current, result =>
			  setResult(JSON.parse(result)),
			);
			qrScanner.start();
			return () => {
			  qrScanner.destroy();
			};
		  } catch (error) {
			console.error(error);
		  }
		};
		startScanner();
	  }, []);

	const updateExistingService = (storedData, existingServiceIndex) => {
		storedData[existingServiceIndex] = {
		  ...storedData[existingServiceIndex],
		  responsavel: responsibleForService,
		  data_inicio: generateDate(),
		  status: "Em andamento",
		};
	};
	

	const createNewService = (storedData) => {
		const newService = {
		  cliente: result.cliente,
		  placa: result.placa,
		  modelo: result.modelo,
		  responsavel: responsibleForService,
		  data_inicio: generateDate(),
		  status: "Em andamento",
		};
		storedData.push(newService);
	  };
	  

	const updateServiceDataToLocalStorage = () => {
		const storedData = JSON.parse(localStorage.getItem("services")) || [];
	  
		const existingServiceIndex = storedData.findIndex(
		  service => service.placa === result.placa,
		);
	  
		console.log(storedData, "ddd");
	  
		if (existingServiceIndex >= 0) {
		  updateExistingService(storedData, existingServiceIndex);
		} else {
		  createNewService(storedData);
		}
	  
		localStorage.setItem("services", JSON.stringify(storedData));
	  };


	const storedData = JSON.parse(localStorage.getItem("services")) || [];
	const dataStorageExist = storedData.filter(service => service.placa === result?.placa);

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem("plate", result.placa);
		updateServiceDataToLocalStorage();
		navigate("/iniciar-servico");
	};

	function isButtonDisabled(dataStorageExist) {
		if (dataStorageExist[0]?.status === "Em andamento" || !result) return false;
		if (responsibleForService) return true;
	}

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<h1 className='text-1xl mb-4'>APONTE A CÂMERA PARA O QR CODE</h1>

			<div
				className='relative bg-blue-2  p-20  border-4 border-blue-1'
				style={{ width: "220px", height: "220px" }}
			>
				<video
					id='qr-video'
					ref={videoRef}
					className='absolute top-0 left-0 w-full h-full object-cover'
					style={{ width: "100%", height: "100%" }}
				></video>
			</div>

			<div className='mt-4'>
				<form onSubmit={handleSubmit} className='max-w-md mx-auto'>
					<label className='block mb-4 mt-4'>
						Responsável:
						<input
							type='text'
							value={responsibleForService}
							onChange={event => setResponsibleForService(event.target.value)}
							className='border-gray-300 border-2 rounded-md p-2 w-full'
						/>
					</label>
					{(result || dataStorageExist[0]?.cliente) && (
						<>
							{result && !dataStorageExist[0]?.cliente && (
								<VehicleDetails vehicle={result} />
							)}
							{dataStorageExist[0]?.cliente && (
								<VehicleDetails vehicle={dataStorageExist[0]} />
							)}
						</>
					)}

					<button
						href='/register-client'
						type='submit'
						className={`bg-green text-white font-semibold py-2 px-4 rounded-md mt-4 ${
							!isButtonDisabled(dataStorageExist)
								? "cursor-not-allowed opacity-50"
								: "cursor-pointer hover:bg-blue-600"
						}`}
						disabled={!isButtonDisabled(dataStorageExist)}
					>
						Registrar Serviço
					</button>
				</form>
			</div>
		</div>
	);
}
