import React, { useEffect, useState,  useRef } from "react";
import QrScanner from "qr-scanner";

QrScanner.WORKER_PATH = "../../public/qr-scanner-worker.min.js";

const QrCodeScanner = () => {
	const [result, setResult] = useState(null);
	const videoRef = useRef(null);

	useEffect(() => {
		QrScanner.WORKER_PATH = "/qr-scanner-worker.min.js";
		QrScanner.hasCamera().then(hasCamera => {
		  if (!hasCamera) {
			console.error("Camera not found.");
			return;
		  }
		  const qrScanner = new QrScanner(videoRef.current, result => setResult(result));
		  qrScanner.start();
		  return () => {
			qrScanner.destroy();
		  };
		});
	  }, []);

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
				<b>Detected QR code:</b>
				<span className='bg-gray-100 px-2 py-1 rounded'>{result ? result : "None"}</span>
			</div>
		</div>
	);
};

export default QrCodeScanner;
