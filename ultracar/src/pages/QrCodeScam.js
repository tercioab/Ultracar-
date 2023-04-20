import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Scanner from "../components/common/Scanner";
import QrScanner from "qr-scanner";
import generateDate from "../Utils/GenerateData";

export default function QrCodeScanner() {
	const [result, setResult] = useState(null);
	const videoRef = useRef(null);
	const [responsibleForService, setResponsibleForService] = useState("");

	let navigate = useNavigate();

	// escaneia o qr code
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
		
		const updatedData = storedData.filter(service => {
			if (service.placa === result.placa) {
				service.responsavel = 
				responsibleForService;
				service.data_inicio = generateDate();
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

	const props = {
		videoRef,
		handleSubmit,
		responsibleForService,
		result,
		setResponsibleForService
	}

	return (
		<Scanner {...props} />
	);
}
