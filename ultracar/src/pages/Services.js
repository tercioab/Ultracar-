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
		const formattedDate = `${date.getDate()}:${
			date.getMonth() + 1
		}:${date.getFullYear()}  H${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

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

	const endService = placa => {
		const storedData = JSON.parse(localStorage.getItem("services")) || [];

		const updatedData = storedData.map(service => {
			if (service.placa === placa) {
				const date = new Date();
				const formattedDate = `${date.getDate()}:${
					date.getMonth() + 1
				}:${date.getFullYear()}  H${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

				return {
					...service,
					status: "Finalizado",
					data_termino: formattedDate,
				};
			}
			return service;
		});

		localStorage.setItem("services", JSON.stringify(updatedData));
	};

	const selectService = placa => {
		const service = storedData.find(data => data.placa === placa);
		localStorage.setItem("plate", placa);
		setServiceSelected(service);
	};

	return (
		<div>
			<div className='flex justify-center m-8 '>
				<div>
					<h2 className='text-lg font-bold mb-4'>Selecione um colaborador</h2>
					<select
						className='w-full md:w-48 rounded-md p-2 mb-4 text-sm font-medium text-slate-900'
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
				</div>
			</div>

			<div className='mx-10'>
				{dadosFiltrados.length > 0 && (
					<div className=' overflow-x-auto justify-center'>
						<table className='md:table-fixed'>
							<thead>
								<tr className='bg-gray'>
									<th className='px-4 py-2'>Cliente</th>
									<th className='px-4 py-2'>Responsável</th>
									<th className='px-4 py-2'>Placa</th>
									<th className='px-4 py-2'>Modelo</th>
									<th className='px-4 py-2'>Status</th>
									<th className='px-4 py-2'>Valor Total</th>
									<th className='px-4 py-2'>Data Início</th>
									<th className='px-4 py-2'>Data Término</th>
									<th className='px-4 py-2'></th>
									<th className='px-4 py-2'></th>
								</tr>
							</thead>
							<tbody>
								{dadosFiltrados.map((data, index) => (
									<tr key={index}>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.cliente}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.responsavel}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.placa}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.modelo}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.status}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.valor_total ? `$${data.valor_total}` : ""}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.data_inicio}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											{data.data_termino}
										</td>
										<td className='border border-gray px-4 py-2 text-center whitespace-nowrap'>
											<button
												className={`bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
													!data.data_inicio
														? "cursor-pointer hover:bg-blue-600"
														: "cursor-not-allowed opacity-50"
												}`}
												onClick={() => selectService(data.placa)}
											>
												Selecionar Serviço
											</button>
										</td>
										<td className='border border-gray px-4 py-2 text-center'>
											<button
												className='bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
												onClick={() => endService(data.placa)}
											>
												Finalizar Serviço
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
			<div className='max-w-md mx-auto'>
				<form>
					<label className='block mb-4 mt-4'>
						Responsável:
						<input
							type='text'
							value={responsavel}
							onChange={event => setResponsavel(event.target.value)}
							className='border-gray-300 border-2 rounded-md p-2 w-full'
						/>
					</label>
				</form>
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
				<button
					onClick={updateServiceDataToLocalStorage}
					className={`bg-green  w-full  mb-16 text-white font-semibold py-2 px-4 rounded-md mt-4 ${
						responsavel && serviceSelected
							? "cursor-pointer hover:bg-blue-600"
							: "cursor-not-allowed opacity-50"
					}`}
					disabled={!responsavel}
				>
					Iniciar serviço
				</button>
			</div>
		</div>
	);
}
