![Cover](https://github.com/kumanaya/baas-prototype/blob/master/assets/cover.png)

<!-- Título do Projeto -->

<h1  align="center">(BaaS) - Banking Protoype 🏦</h1>

<!-- Descrição do Projeto -->

<p  align="center">O projeto é um protótipo de simulador de BaaS (Banking as a Service) que oferece uma plataforma flexível para desenvolvedores e instituições financeiras explorarem e experimentarem serviços bancários em um ambiente controlado. O projeto permite a simulação de operações bancárias, desde a criação de contas até a execução de transações.</p>

<!-- Badges -->

<div align="center">  <img src="https://img.shields.io/github/license/kumanaya/bass-prototype" alt="Licença"> <img src="https://img.shields.io/github/v/release/kumanaya/bass-prototype" alt="Versão"> <img src="https://img.shields.io/github/issues/kumanaya/bass-prototype" alt="Issues"> <img src="https://img.shields.io/github/forks/kumanaya/bass-prototype" alt="Forks"> <img src="https://img.shields.io/github/stars/kumanaya/bass-prototype" alt="Stars"> </div>

<!-- Índice -->

## Índice

- [Funcionalidades](#funcionalidades)

- [Tecnologias e Bibliotecas Principais](#tecnologias-e-bibliotecas-principais)

- [Pré-requisitos](#pré-requisitos)

- [Instalação](#instalação)

- [Como Configurar](#como-configurar)

- [Como Executar](#como-executar)

- [Documentação das Rotas](#documentacao-das-rotas)

- [Testes ](#testes)

- [Contribuindo](#contribuindo)

- [Licença](#licença)

<!-- Funcionalidades -->

## Funcionalidades

### Contas Bancárias

- Crie, atualize, consulte e remova contas bancárias virtuais.
- Atribua a cada conta um número exclusivo, um tipo (corrente ou poupança) e um saldo inicial.

### Depósito e Saque

- Realize depósitos em contas bancárias virtuais para aumentar o saldo.
- Efetue saques para diminuir o saldo das contas.
- Todas as operações de depósito e saque são registradas para fins de auditoria.

### Transferências Instantâneas (PIX)

- Facilite transferências instantâneas de fundos entre contas virtuais, simulando o funcionamento do sistema de pagamentos instantâneos (PIX).
- Registre cada transação PIX, permitindo o acompanhamento e a consulta das transações efetuadas.

<!-- Tecnologias e Bibliotecas Principais -->

## Tecnologias e Bibliotecas Principais

Aqui estão algumas das principais tecnologias e bibliotecas utilizadas no projeto:

- **Node.js**: Plataforma de tempo de execução JavaScript usada para executar o servidor e a lógica de back-end.

- **Express**: Um framework web para Node.js que simplifica o desenvolvimento de APIs e aplicativos web.

- **Mongoose**: Uma biblioteca ODM (Object Data Modeling) para MongoDB, permitindo a interação com o banco de dados de forma simplificada.

- **Swagger-JSDoc e Swagger-UI-Express**: Usados para documentar e criar uma interface interativa para as APIs do projeto.

- **Cors**: Um middleware Express para habilitar solicitações cruzadas (CORS) em seu servidor.

- **Zod**: Uma biblioteca de validação de esquema em TypeScript.

- **Jest e ts-jest**: Usados para testes unitários e de integração no projeto.

- **TypeScript**: Uma linguagem que adiciona tipagem estática ao JavaScript, aumentando a segurança e a manutenção do código.

- **Nodemon**: Uma ferramenta de desenvolvimento que reinicia o servidor automaticamente sempre que ocorrem alterações nos arquivos.

<!-- Pré-requisitos -->

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em seu sistema:

- **Node.js:** Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

- **Git:** Você também precisará do Git instalado em seu sistema para clonar o repositório. Você pode baixá-lo em [git-scm.com](https://git-scm.com/).

<!-- Instalação -->

## Instalação

1.  **Clone o repositório:**

```bash
git clone https://github.com/kumanaya/bass-prototype.git
```

2.  **Acesse a pasta do projeto:**

```bash
cd bass-prototype
```

3.  **Instale as dependências:**

```bash
npm install
```

<!-- Como Configurar -->

## Como Configurar

Para iniciar o projeto, é necessário configurar um arquivo `.env` que contenha variáveis de ambiente importantes, como a conexão com o banco de dados. Utilizar o uso do MongoDB ou MongoDB Atlas como sua base de dados para este projeto.

Aqui está um exemplo de arquivo `.env`:

```plaintext
PORT=8080
MONGO_URI=mongodb://localhost/baas-prototype
```

<!-- Como Executar -->

## Como Executar

1.  **Inicie o servidor de desenvolvimento:**

```bash
cd app/server && npm run start:dev
```

Isso iniciará o servidor de desenvolvimento. Você verá mensagens no terminal indicando que o servidor está em execução e ouvindo em uma porta: http://localhost:8080/.

<!-- Documentação das Rotas -->

## Documentação das Rotas

A documentação das rotas está disponível em `/docs`. Para acessar a documentação completa das APIs e endpoints, visite:

### Rotas para Utilizar no Postman

Neste repositório, você encontrará um arquivo do Insomnia ou Postman que contém todas as rotas e endpoints necessários para interagir com este projeto. O arquivo está localizado na pasta "assets" e é chamado "BaasS Prototype V1.postman_collection".

Certifique-se de importar este arquivo em sua ferramenta de escolha (Insomnia ou Postman) para ter acesso às configurações pré-configuradas das rotas e facilitar a interação com o projeto.


### Importando no Postman

Para importar o arquivo no Postman, siga os passos abaixo:

1. Abra o Postman.
2. Clique em "Import" na barra de menu.
3. Escolha a opção "File" e selecione o arquivo "BaasS Prototype V1.postman_collection" na pasta "assets".
4. As rotas e configurações serão importadas para o seu ambiente do Postman.

Agora você pode começar a usar as rotas facilmente e testar a funcionalidade do projeto de forma eficiente.

**Nota:** Certifique-se de que você tem o Insomnia ou o Postman instalados em seu sistema antes de importar o arquivo.

<!-- Testes -->

## Testes

Os testes de rotas têm como objetivo verificar o correto funcionamento das APIs e endpoints do projeto. Eles garantem que as solicitações HTTP sejam manipuladas de maneira adequada, validando a funcionalidade de depósito, saque, transferências instantâneas (PIX) e outras operações bancárias simuladas.

Para executar os testes, utilize o comando `npm test`. Os testes estão localizados na pasta de testes, e os arquivos de teste são configurados de acordo com as diferentes operações bancárias simuladas.

Sinta-se à vontade para explorar os testes na pasta correspondente e contribuir para a melhoria contínua do projeto.

<!-- Contribuindo -->

## Contribuindo

Você é bem-vindo(a) para contribuir com este projeto. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

<!-- Licença -->

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
