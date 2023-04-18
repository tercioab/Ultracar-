import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "qr-scanner";

export default function QrCodeScanner() {
	const [result, setResult] = useState(null);
	const videoRef = useRef(null);
	const [responsavel, setResponsavel] = useState("");

	let navigate = useNavigate();

	useEffect(() => {
		QrScanner.hasCamera().then(hasCamera => {
			if (!hasCamera) {
				console.error("Camera not found.");
				return;
			}
			const qrScanner = new QrScanner(videoRef.current, result =>
				setResult(JSON.parse(result)),
			);
			qrScanner.start();
			return () => {
				qrScanner.destroy();
			};
		});
	}, []);

	const updateServiceDataToLocalStorage = () => {
		const storedData = JSON.parse(localStorage.getItem("services")) || [];
		const date = new Date();
		const formattedDate = `${date.getDate()}:${
			date.getMonth() + 1
		}:${date.getFullYear()}  H${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const updatedData = storedData.filter(service => {
			if (service.placa === result.placa) {
				service.responsavel = responsavel;
				service.data_inicio = formattedDate;
				service.status = "Em andamento";
				return service;
			}
			return service;
		});

		localStorage.setItem("services", JSON.stringify(updatedData));
	};

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem("plate", result.placa);
		navigate("/iniciar-servico");
		updateServiceDataToLocalStorage();
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<h1 className='text-1xl mb-4'>APONTE A CÂMERA PARA O QR CODE</h1>

			
			<div
				className='relative bg-blue-2  p-20  border-4 border-blue-1'
				style={{ width: "400px", height: "400px" }}
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
							value={responsavel}
							onChange={event => setResponsavel(event.target.value)}
							className='border-gray-300 border-2 rounded-md p-2 w-full'
						/>
					</label>
					{result && (
						<div className='border border-gray-200 rounded-md p-2 mt-2'>
							<div className='grid grid-cols-3 gap-4'>
								<div className='col-span-1 font-bold'>Cliente:</div>
								<div className='col-span-2'>{result?.cliente}</div>
							</div>
							<div className='grid grid-cols-3 gap-4'>
								<div className='col-span-1 font-bold'>Placa:</div>
								<div className='col-span-2'>{result?.placa}</div>
							</div>
							<div className='grid grid-cols-3 gap-4'>
								<div className='col-span-1 font-bold'>Modelo:</div>
								<div className='col-span-2'>{result?.modelo}</div>
							</div>
						</div>
					)}
					<button
						href='/register-client'
						type='submit'
						className={`bg-green text-white font-semibold py-2 px-4 rounded-md mt-4 ${
							responsavel && result
								? "cursor-pointer hover:bg-blue-600"
								: "cursor-not-allowed opacity-50"
						}`}
						disabled={!responsavel}
					>
						Registrar Serviço
					</button>
				</form>
			</div>
		</div>
	);
}
