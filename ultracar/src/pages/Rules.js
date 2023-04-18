export default function Rules() {
	return (
		<div class='bg-gray-2 p-8 mx-auto my-8 rounded-lg w-3/4'>
			<h1 class='text-2xl font-bold mb-4'>
				Bem-vindo ao manual de instruções para o seu aplicativo Ultracar QRMechanic !
			</h1>
			<p class='mb-8'>
				Este aplicativo foi desenvolvido para ajudar oficinas mecânicas a gerenciar seus
				serviços de forma mais eficiente. Ele permite que você cadastre clientes, veículos
				e serviços em um só lugar, tornando o processo de gerenciamento mais fácil e
				organizado.
			</p>
			<h2 class='text-xl font-bold mb-4'>Registro De Cliente</h2>
			<p class='mb-8'>
				Ao entrar no link Registrar cliente você será direcionado para a página de
				cadastro de cliente. Nessa página, você deve inserir o nome do cliente, placa e
				modelo do veículo. Depois de preencher essas informações, um QR Code será gerado e
				você pode baixá-lo em formato PDF fazer a impressão do mesmo.
			</p>
			<h2 class='text-xl font-bold mb-4'>Leitura do QR Code</h2>
			<p class='mb-8'>
				No link scanner há um scanner de QR Code que permite que você leia o código gerado
				na página de cadastro. Depois de escanear o código, as informações do cliente
				serão exibidas na tela. A partir dessa pagina já se pode iniciar o serviço, o
				prestador de serviço insere o nome no campo pedido e aperta o botão Registrar
				serviço, logo ele sera redirecionada para a pagina onde ira fazer a seleção das
				peças.
			</p>

			<h2 class='text-xl font-bold mb-4'>Selecionando Peças</h2>
			<p class='mb-8'>
				Nessa etapa você faz a escolha das peças necessárias para o serviço. e o valor
				total será calculado automaticamente. Depois de selecionar todas as peças
				necessárias, você pode prosseguir para a próxima etapa.
			</p>

			<h2 class='text-xl font-bold mb-4'>Tabela de Serviços</h2>
			<p class='mb-8'>
				Na página seguinte, uma tabela é exibida, mostrando todos os serviços já feitos.
				Você pode filtrar essa tabela pelo nome do prestador de serviço. Depois de
				encontrar o serviço desejado, caso seja um prestador de serviço você pode iniciar
				algum trabalho que ainda não esta em andamento ou finalizar algum no qual você já
				estava trabalhando.
			</p>

			<h2 class='text-xl font-bold mb-4'>Conclusão</h2>
			<p class='mb-8'>
				Esperamos que este manual de instruções tenha ajudado você a entender como o
				aplicativo de oficina funciona. Se você tiver alguma dúvida ou precisar de ajuda
				adicional, não hesite em entrar em contato por <a className="text-blue-2" href="https://www.linkedin.com/in/walthercio-almeida/"> aqui</a>. Obrigado
				por escolher nosso aplicativo!
			</p>
		</div>
	);
}
