# Exemplo de Login com Google OAuth2

Este é um projeto simples de exemplo que demonstra como implementar o login com Google OAuth2 em uma aplicação React. A aplicação permite que os usuários façam login usando o Google One Tap e um botão de login manual, caso o popup do Google One Tap não apareça automaticamente.

## Requisitos

- Node.js
- npm (Node Package Manager) ou yarn

## Instalação

1. Clone este repositório:

    ```sh
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

3. Inicie a aplicação:

    ```sh
    npm start
    ```

    ou

    ```sh
    yarn start
    ```

## Configuração do Google OAuth2

1. Vá para o [Google Cloud Console](https://console.cloud.google.com/), crie um novo projeto e configure o OAuth2.

2. Obtenha o Client ID do OAuth2 e substitua a variável `clientID` no arquivo `App.js` pelo seu Client ID.

## Uso

Ao iniciar a aplicação, você verá uma tela com a mensagem para escolher o perfil de login no pop-up do canto superior direito. Caso o pop-up não apareça, você pode clicar no botão de login manual para iniciar a autenticação.

## Estrutura do Projeto

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
