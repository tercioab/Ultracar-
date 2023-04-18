import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
	const [responsavel, setResponsavel] = useState("");
	const [serviceSelected, setServiceSelected] = useState("");
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState("");
  let navigate = useNavigate();

	const storedData = JSON.parse(localStorage.getItem("services")) || [];

	const colaboradores = Array.from(new Set(storedData.map(data => data.responsavel)));

	const dadosFiltrados =
		colaboradorSelecionado !== ""
			? storedData.filter(data => data.responsavel === colaboradorSelecionado)
			: storedData;

	const updateServiceDataToLocalStorage = () => {
		const storedData = JSON.parse(localStorage.getItem("services")) || [];
		const date = new Date();
		const formattedDate = `${date.getFullYear()}:${
			date.getMonth() + 1
		}:${date.getDate()}`;
		const updatedData = storedData.filter(service => {
			if (service.placa === serviceSelected.placa) {
				service.responsavel = responsavel;
				service.data_inicio = formattedDate;
				service.status = "Em andamento";
				return service;
			}
			return service;
		});
    localStorage.setItem("services", JSON.stringify(updatedData));
    navigate("/iniciar-servico");
	};

	const selectService = placa => {
		const service = storedData.find(data => data.placa === placa);
		setServiceSelected(service);
	};

	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-lg font-bold mb-4'>Selecione um colaborador:</h2>
			<select
				className='w-48 rounded-md p-2 mb-4'
				value={colaboradorSelecionado}
				onChange={event => setColaboradorSelecionado(event.target.value)}
			>
				<option value=''>Todos</option>
				{colaboradores.map(colaborador => (
					<option key={colaborador} value={colaborador}>
						{colaborador}
					</option>
				))}
			</select>

			{dadosFiltrados.length > 0 && (
				<table className='w-full table-fixed text-center'>
					<thead>
						<tr>
							<th className='w-1/4 py-2'>Cliente</th>
							<th className='w-1/4 py-2'>Responsável</th>
							<th className='w-1/4 py-2'>Placa</th>
							<th className='w-1/4 py-2'>Modelo</th>
							<th className='w-1/4 py-2'>Data</th>
							<th className='w-1/4 py-2'></th>
						</tr>
					</thead>
					<tbody>
						{dadosFiltrados.map((data, index) => (
							<tr key={index}>
								<td className='border py-2'>{data.cliente}</td>
								<td className='border py-2'>{data.responsavel}</td>
								<td className='border py-2'>{data.placa}</td>
								<td className='border py-2'>{data.modelo}</td>
								<td className='border py-2'>{data.data_inicio}</td>
								<button
									className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
										!data.data_inicio
											? "cursor-pointer hover:bg-blue-600"
											: "cursor-not-allowed opacity-50"
									}`}
									onClick={() => selectService(data.placa)}
								>
									Selecionar Serviço
								</button>
							</tr>
						))}
					</tbody>
				</table>
			)}
			<form className='max-w-md mx-auto'>
				<label className='block mb-4 mt-4'>
					Responsável:
					<input
						type='text'
						value={responsavel}
						onChange={event => setResponsavel(event.target.value)}
						className='border-gray-300 border-2 rounded-md p-2 w-full'
					/>
				</label>
				{serviceSelected && (
					<div className='border border-gray-200 rounded-md p-2 mt-2'>
						<div className='grid grid-cols-3 gap-4'>
							<div className='col-span-1 font-bold'>Cliente:</div>
							<div className='col-span-2'>{serviceSelected?.cliente}</div>
						</div>
						<div className='grid grid-cols-3 gap-4'>
							<div className='col-span-1 font-bold'>Placa:</div>
							<div className='col-span-2'>{serviceSelected?.placa}</div>
						</div>
						<div className='grid grid-cols-3 gap-4'>
							<div className='col-span-1 font-bold'>Modelo:</div>
							<div className='col-span-2'>{serviceSelected?.modelo}</div>
						</div>
					</div>
				)}
			</form>
			<button
				onClick={updateServiceDataToLocalStorage}
				className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4 ${
					responsavel && serviceSelected
						? "cursor-pointer hover:bg-blue-600"
						: "cursor-not-allowed opacity-50"
				}`}
				disabled={!responsavel}
			>
				Iniciar serviço
			</button>
		</div>
	);
}
