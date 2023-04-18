# Ultracar  MechanicMate

## Deploy
https://ultracar-henna.vercel.app/services

## Descrição
Este é um projeto de uma oficina mecânica fictícia que permite gerenciar serviços de manutenção e reparo de veículos. A aplicação permite que o usuário cadastre novos serviços, adicione peças necessárias para o serviço, selecione o mecânico responsável e adicione informações sobre o veículo.


## Como clonar o projeto
Abra o terminal em seu computador.
Selecione o diretório onde você deseja clonar o projeto.
Digite o seguinte comando: git clone git@github.com:tercioab/Ultracar-.git

## Como iniciar o projeto
Abra o terminal e navegue até o diretório raiz do projeto.
Digite o comando npm install para instalar as dependências necessárias.
Em seguida, digite o comando npm start para iniciar o servidor de desenvolvimento.
Abra o navegador e acesse http://localhost:3000 para visualizar o projeto em execução.

## O que foi utilizado no projeto

### Bibliotecas:

@headlessui/react<br>
@heroicons/react<br>
@testing-library/jest-dom<br>
@testing-library/react<br>
@testing-library/user-event<br>
html-pdf<br>
html-to-image<br>
jspdf<br>
mkcert<br>
qr-scanner<br>
qrcode.react<br>
svg2img<br>
web-vitals<br>

### tecnologias
React<br>
Node.js<br>

### Framework:

Tailwind CSS


## Estrategia para o projeto

Meu objetivo nesse projeto foi entregar todas as funcionalidades solicitadas, incluindo o cadastro de clientes, geração e leitura de QR Code, listagem de serviços e a possibilidade de iniciar um serviço pelo colaborador. Como o prazo foi curto, optei por focar na implementação das funcionalidades visíveis para o cliente, de forma que ele pudesse avaliar e confirmar o projeto. Para depois disso (se estivessemos em um projeto para o cliente real) nos concetrarmos no desenvolvimento do backend e na resolução de quaisquer pendências técnicas. Em resumo, busquei atender às necessidades do cliente e garantir que o projeto fosse entregue dentro do prazo, priorizando as funcionalidades mais importantes.

## Principais desafios encontrados no desenvolvimento

A questão da ultilização da camera no projeto foi algo muito novo para mim, então no começo eu demorei um pouco para entender como tudo funcionava para criar a funcionalidade de ler o Qr code. 

Baixar o Qr code creio que foi uma das partes mais complicadas do projeto, a biblioteca html-pdf não funcionava com server-side e no inicio eu tinha começado uma aplicação com next.js então em virtude do tempo eu tive que trocar o projeto para react-app que renderiza ao lado do cliente 

## Pontos fortes

Um dos pontos fortes do projeto para mim foi a implementação bem-sucedida das funcionalidades de geração e leitura de QR code algo que eu nunca tinha visto sobre e para conseguir implementá-las, precisei estudar documentações e assistir aulas no YouTube, mas no final, fiquei muito satisfeito com o resultado.

Outro ponto que vale resaltar foi a implementação do Tailwind para estilizar o projeto, com ele conseguir implementar todo estilo do projeto enquanto desenvolvia garantindo um projeto responsivo.

## Pontos fracos

Reconheço que um dos pontos fracos do projeto foi a falta de testes automatizados. Sei que testes são essenciais para garantir um código limpo e de qualidade, mas como não tenho muita experiência com TDD (algo que pretendo melhorar em minhas hard-skils), optei por focar mais na implementação das funcionalidades do projeto.

Além disso, devido ao tempo limitado, não separei adequadamente os componentes em seus respectivos diretórios, deixando muitos deles em uma única página. Isso é algo que gostaria de melhorar futuramente. (pretendo continuar desenvolvendo esse projeto mesmo depois da avaliação)


## Pontos para melhorar futuramente

Para melhorar o projeto, pretendo utilizar a Context API do React para gerenciar alguns estados e, assim, simplificar o gerenciamento de dados em diferentes componentes.

Também quero componentizar cada um dos componentes em seus respectivos diretórios, tornando o código mais limpo e organizado.

Por fim, uma das minhas metas é implementar testes automatizados para garantir a qualidade e manutenibilidade do código.

## Observações finais

Gostaria de agradecer a equipe da Ultracar pela oportunidade de poder estar executando esse projeto, foi algo bem divertido e desafiador e que eu gostei muito de ter desenvolvido.


