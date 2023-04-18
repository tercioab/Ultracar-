import React, { useState } from 'react';

export default function Services (){
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState('');
  const storedData = JSON.parse(localStorage.getItem("services")) || [];

  const colaboradores = Array.from(new Set(storedData.map(data => data.responsavel)));

  const dadosFiltrados = colaboradorSelecionado !== ''
  ? storedData.filter(data => data.responsavel === colaboradorSelecionado)
  : storedData;


  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Selecione um colaborador:</h2>
      <select className="w-48 rounded-md p-2 mb-4" value={colaboradorSelecionado} onChange={event => setColaboradorSelecionado(event.target.value)}>
        <option value="">Todos</option>
        {colaboradores.map(colaborador => (
          <option key={colaborador} value={colaborador}>{colaborador}</option>
        ))}
      </select>

      {dadosFiltrados.length > 0 && (
        <table className="w-full table-fixed text-center">
          <thead>
            <tr>
              <th className="w-1/4 py-2">Cliente</th>
              <th className="w-1/4 py-2">Responsável</th>
              <th className="w-1/4 py-2">Placa</th>
              <th className="w-1/4 py-2">Modelo</th>
              <th className="w-1/4 py-2">Data</th>
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.map((data, index) => (
              <tr key={index}>
                <td className="border py-2">{data.cliente}</td>
                <td className="border py-2">{data.responsavel}</td>
                <td className="border py-2">{data.placa}</td>
                <td className="border py-2">{data.modelo}</td>
                <td className="border py-2">{data.data_inicio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {dadosFiltrados.length === 0 && (
        <p className="text-lg font-bold mt-4">Nenhum dado encontrado para o colaborador selecionado.</p>
      )}
    </div>
  );
};
