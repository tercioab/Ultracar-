export default function Footer() {
	return (
		<footer class='p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-16 bottom-0 w-full bg-white border-t-2 border-blue-2'>
			<span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				Feito por:{" "}
				<a
					href='https://www.linkedin.com/in/walthercio-almeida/'
					class='hover:underline'
                    target='_blank'
                    rel="noreferrer"
				>
                    WALTHERCIO
                    {" "}
                </a>
                Para: {" "}
                <a
					href='https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/'
					class='hover:underline text-blue-2'
                    target='_blank'
                    rel="noreferrer"
				>
					Ultracar
				</a>
			</span>
		</footer>
	);
}