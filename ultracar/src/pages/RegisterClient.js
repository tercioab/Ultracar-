import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import storedData from "../data/GetLocalStorageData";
import { toPng } from "html-to-image";

export default function RegisterClient() {
	const [name, setName] = useState("");
	const [plate, setPlate] = useState("");
	const [model, setModel] = useState("");

	const [qrCodeData, setQRCodeData] = useState("");
	const qrCodeRef = useRef(null);

	const saveServicesDataToLocalStorage = () => {
		storedData.push({
			cliente: name,
			placa: plate,
			modelo: model,
			responsavel: "aguardando colaborador",
			data_inicio: "",
			status: "Aguardando um responsavel",
		});
		localStorage.setItem("services", JSON.stringify(storedData));
	};

	const handleFormSubmit = event => {
		const clientExist = storedData.filter(cliente => cliente.placa === plate);
		event.preventDefault();
		if (clientExist.length) {
			alert("esse carro já esta cadastrado");
		}
		if (!clientExist.length) {
			const qrCodeString = `{"cliente":"${name}", "placa":"${plate}", "modelo":"${model}"}`;

			setQRCodeData(qrCodeString);
			saveServicesDataToLocalStorage();
		}
	};

	const handleDownloadQRCode = () => {
		toPng(qrCodeRef.current).then(function (dataUrl) {
			const pdf = new jsPDF();
			pdf.addImage(dataUrl, "PNG", 30, 30);
			pdf.save(`cliente:${name}.pdf`);
		});
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-3xl font-bold mb-4'>Novo Cliente</h1>
				<div className='w-full md:w-1/2 lg:w-1/3'>
					<form onSubmit={handleFormSubmit}>
						<div className='mb-4'>
							<label htmlFor='name' className='block font-bold text-gray-700 mb-2'>
								Nome:
							</label>
							<input
								type='text'
								id='name'
								value={name}
								onChange={e => setName(e.target.value)}
								className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								required
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='plate' className='block font-bold text-gray-700 mb-2'>
								Placa:
							</label>
							<input
								type='text'
								id='plate'
								value={plate}
								onChange={e => setPlate(e.target.value)}
								className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								required
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='model' className='block font-bold text-gray-700 mb-2'>
								Modelo:
							</label>
							<input
								type='text'
								id='model'
								value={model}
								onChange={e => setModel(e.target.value)}
								className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								required
							/>
						</div>

						<button
							type='submit'
							className='bg-blue-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
						>
							Registrar Cliente
						</button>
						<button
							className='bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full'
							onClick={handleDownloadQRCode}
						>
							Download qr code
						</button>
					</form>
				</div>
				{qrCodeData && (
					<div className='mt-8 w-full md:w-1/2 lg:w-1/3'>
						<div ref={qrCodeRef} className='flex flex-col'>
							<QRCode value={qrCodeData} size={256} id='qr-code' className='mb-4' />
							<span className='text-lg font-bold mb-2'>Placa: {plate}</span>
							<span className='text-lg font-bold mb-2'>Modelo: {model}</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
