import React, { useState } from "react";
import listaPecas from "../data/pices.json";
import { useNavigate } from "react-router-dom";

export default function StartService() {
	const [totalValue, settotalValue] = useState(0);
	const [selectedPices, setSelectedPices] = useState([]);
	let navigate = useNavigate();

	function addPice(pice) {
		setSelectedPices([...selectedPices, pice]);
		settotalValue(prevtotalValue => prevtotalValue + pice.price);
	}

	function removePice(pice) {
		const novaLista = selectedPices.filter(p => p !== pice);
		setSelectedPices(novaLista);
		settotalValue(prevtotalValue => prevtotalValue - pice.price);
	}

	const updateServiceDataToLocalStorage = () => {
		const storedData = JSON.parse(localStorage.getItem("services")) || [];
		const plate = localStorage.getItem("plate");
		const updatedData = storedData.map(service => {
			if (service.placa === plate) {
				return {
					...service,
					valor_total: totalValue,
				};
			}
			return service;
		});

		localStorage.setItem("services", JSON.stringify(updatedData));
		navigate("/services");
	};

	return (
		<div className='mx-auto max-w-3xl p-6'>
			<h2 className='text-2xl font-bold mb-4'>Lista de Peças</h2>
			<select
				className='block w-full border rounded-md py-2 px-3 mb-4'
				onChange={e => addPice(JSON.parse(e.target.value))}
			>
				<option>Selecione uma peça</option>
				{listaPecas.map((pice, index) => (
					<option key={index} value={JSON.stringify(pice)}>
						{pice.pice} - R$ {Number(pice.price).toFixed(2)}
					</option>
				))}
			</select>
			<h2 className='text-2xl font-bold mb-4'>Peças Selecionadas</h2>
			<table className='w-full'>
				<thead>
					<tr className='bg-gray-300'>
						<th className='text-left py-2 px-3'>Peça</th>
						<th className='text-left py-2 px-3'>Preço</th>
						<th className='text-left py-2 px-3'></th>
					</tr>
				</thead>
				<tbody>
					{selectedPices.map((pice, index) => (
						<tr key={index} className='border-b'>
							<td className='py-2 px-3'>{pice.pice}</td>
							<td className='py-2 px-3'>R$ {Number(pice.price).toFixed(2)}</td>
							<td className='py-2 px-3'>
								<button
									className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
									onClick={() => removePice(pice)}
								>
									Remover
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button
				className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
				onClick={updateServiceDataToLocalStorage}
			>
				iniciar serviço
			</button>
			<p className='text-xl font-bold mt-4'>
				Valor total: R$ {Number(totalValue).toFixed(2)}
			</p>
		</div>
	);
}
