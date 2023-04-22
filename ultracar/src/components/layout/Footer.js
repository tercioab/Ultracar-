export default function Footer() {
	return (
		<footer className='bg-white rounded-lg dark:bg-gray-900 m-4 border-t-2 border-blue-500'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<a
					href='https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/'
					target='_blank'
					rel='noreferrer'
					className='flex items-center mb-4 sm:mb-0'
				>
					{/* <img
			  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s"
			  className="h-8 mr-3"
			  alt="Ultracar logo"
			/> */}
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						QRMechanicr
					</span>
				</a>

				<hr className='my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8 w-full' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					Feito por:{" "}
					<a
						href='https://www.linkedin.com/in/walthercio-almeida/'
						className='hover:underline'
						target='_blank'
						rel='noreferrer'
					>
						Walthércio
					</a>{" "}
					Para:{" "}
					<a
						href='https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/'
						className='hover:underline text-blue-500'
						target='_blank'
						rel='noreferrer'
					>
						Ultracar
					</a>{" "}
				</span>
			</div>
		</footer>
	);
}
