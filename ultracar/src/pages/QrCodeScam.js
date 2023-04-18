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
		const formattedDate = `${date.getFullYear()}:${
			date.getMonth() + 1
		}:${date.getDate()}`;
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
		navigate("/iniciar-servico");
		updateServiceDataToLocalStorage();
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<h1 className='text-2xl font-bold mb-4'>Scan from WebCam:</h1>

			<div className='relative bg-gray-200 rounded-lg p-20 shadow-md border-2 border-gray-400'>
				<video
					id='qr-video'
					ref={videoRef}
					className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
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
						className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4 ${
							responsavel && result
								? "cursor-pointer hover:bg-blue-600"
								: "cursor-not-allowed opacity-50"
						}`}
						disabled={!responsavel}
					>
						Iniciar serviço
					</button>
				</form>
			</div>
		</div>
	);
}
