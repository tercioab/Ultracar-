import { useState , useRef} from "react";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";


import {toPng} from 'html-to-image';

export default function RegisterClient() {
	const [name, setName] = useState("");
	const [plate, setPlate] = useState("");
	const [model, setModel] = useState("");

	const [qrCodeData, setQRCodeData] = useState("");
  const qrCodeRef = useRef(null);

	const handleFormSubmit = event => {
		event.preventDefault();
		const qrCodeString = `${name}, ${plate}, ${model}`;
		setQRCodeData(qrCodeString);
	};

  const handleDownloadQRCode = () => {
    toPng(qrCodeRef.current).then(function (dataUrl) {
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, 'PNG', 30, 30);
      pdf.save(`cliente:${name}.pdf`);
    });
  };

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-3xl font-bold mb-8'>QR Code Generator</h1>

			<form onSubmit={handleFormSubmit} className='w-full md:w-1/2 lg:w-1/3'>
				<div className='mb-4'>
					<label htmlFor='name' className='block font-bold text-gray-700 mb-2'>
						Name:
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
						Plate:
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
						Model:
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
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
				>
					Generate QR Code
				</button>
			</form>
      <button onClick={handleDownloadQRCode}>download</button>
			{qrCodeData && (
        <div  className='mt-8 w-full md:w-1/2 lg:w-1/3'>
          <div ref={qrCodeRef}>
          <QRCode value={qrCodeData} size={256} id='qr-code' />
          </div>
        </div>
        
			)}
		</div>
	);
}
