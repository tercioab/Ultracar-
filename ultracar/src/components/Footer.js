export default function Footer() {
	return (
		<footer class='bg- rounded-lg shadow dark:bg-gray-900 m-4 border-t-2 border-blue-2'>
			<div class='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<a
					href='https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/'
					target='_blank'
					rel='noreferrer'
					class='flex items-center mb-4 sm:mb-0'
				>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s'
						class='h-8 mr-3'
						alt='Ultracar logo'
					/>
					<span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Ultracar
					</span>
				</a>

				<hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w' />
				<span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					Feito por:{" "}
					<a
						href='https://www.linkedin.com/in/walthercio-almeida/'
						class='hover:underline'
						target='_blank'
						rel='noreferrer'
					>
						Walthércio
					</a>{" "}
					Para:{" "}
					<a
						href='https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/'
						class='hover:underline text-blue-2'
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
