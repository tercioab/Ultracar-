export default function VehicleDetails({ vehicle }) {
    return (
      <div className='border border-gray-200 rounded-md p-2 mt-2'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-1 font-bold'>Cliente:</div>
          <div className='col-span-2'>{vehicle.cliente}</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-1 font-bold'>Placa:</div>
          <div className='col-span-2'>{vehicle.placa}</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-1 font-bold'>Modelo:</div>
          <div className='col-span-2'>{vehicle.modelo}</div>
        </div>
        {vehicle.responsavel && (
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 font-bold'>Responsável:</div>
            <div className='col-span-2'>{vehicle.responsavel}</div>
          </div>
        )}
        {vehicle.data_inicio && (
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 font-bold'>Data de início:</div>
            <div className='col-span-2'>{vehicle.data_inicio}</div>
          </div>
        )}
        {vehicle.status && (
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 font-bold'>Status:</div>
            <div className='col-span-2'>{vehicle.status}</div>
          </div>
        )}
      </div>
    );
  }