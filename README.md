# Projeto Biblioteca Online

## Visão Geral

Este projeto é uma aplicação de gerenciamento de livros que permite visualizar, criar, editar e deletar informações sobre livros. A aplicação é dividida em um front-end desenvolvido com React e um back-end com Node.js, Express e MongoDB.

## Tecnologias Utilizadas

- **Front-end**:
  - React
  - React Router
  - Axios
  - Vite
  - SCSS

- **Back-end**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose


## Funcionalidades

- **Listar Livros**: Exibir uma lista de todos os livros.
- **Visualizar Livro**: Exibir detalhes de um livro específico.
- **Criar Livro**: Adicionar um novo livro à base de dados.
- **Editar Livro**: Atualizar informações de um livro existente.
- **Deletar Livro**: Remover um livro da base de dados.

## Configuração e Execução

### Pré-requisitos

- Node.js
- npm ou yarn
- MongoDB

### Instalação

Clone o repositório:
```bash
   git clone https://github.com/GabrielD1996/Biblioteca-Online.git
```
1. Navegue até o diretório `backEnd`:
```bash
cd backEnd
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor:
```bash
npm run dev
```
### Front-end

1. Navegue até o diretório `frontEnd`:
```bash
cd frontEnd
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor:
```bash
npm run dev
```

### Configuração do Banco de Dados

1. Inicie o MongoDB.

2. Configure a conexão do MongoDB no arquivo `backEnd\src\config\mongo.js'`.

## Estrutura do Projeto


- **backEnd/**:Diretório do back-end
  - `src/`
    - `config/`: Configurações do projeto
      - `mongo.js`: Configuração da conexão com o MongoDB
    - `models/`: Modelos de dados
      - `livros/`: Modelos relacionados aos livros
        - `livro.model.js`: Modelo de livro
    - `index.js`: Arquivo principal do servidor
  - `package-lock.json`: Arquivo de dependências do npm
  - `package.json`: Arquivo de configuração do npm

- **frontEnd/**: Diretório do front-end
  - `public/`: Arquivos públicos
  - `src/`
    - `api/`: Serviços de API
      - `LivrosService.js`: Serviço para interagir com a API de livros
    - `assets/`: Recursos estáticos
      - `logo.png`: Logo da aplicação
    - `components/`: Componentes reutilizáveis
      - `Header/`: Componente de cabeçalho
        - `Header.jsx`: Componente de cabeçalho
        - `index.scss`: Estilos do componente de cabeçalho
    - `views/`: Páginas do aplicativo
      - `Home/`: Página inicial
        - `Home.jsx`: Componente da página inicial
        - `index.scss`: Estilos da página inicial
      - `livro/`: Página de detalhes do livro
        - `Livro.jsx`: Componente da página de detalhes do livro
        - `index.scss`: Estilos da página de detalhes do livro
      - `Livros/`: Página de listagem de livros
        - `Livros.jsx`: Componente da página de listagem de livros
        - `index.scss`: Estilos da página de listagem de livros
      - `LivrosCadastro/`: Página de cadastro de livros
        - `LivrosCadastro.jsx`: Componente da página de cadastro de livros
        - `index.scss`: Estilos da página de cadastro de livros
      - `LivrosEdicao/`: Página de edição de livros
        - `LivrosEdicao.jsx`: Componente da página de edição de livros
        - `index.scss`: Estilos da página de edição de livros
    - `main.jsx`: Componente principal do React
    - `index.scss`: Arquivo de estilos principais
    - `index.html`: Página HTML principal
  - `package-lock.json`: Arquivo de dependências do npm
  - `package.json`: Arquivo de configuração do npm
  - `vite.config.js`: Configuração do Vite




## API Endpoints

### Listar Livros

- **GET** `/livros`
- **Resposta**: 
  ```json
  [
    {
      "id": "1",
      "titulo": "Exemplo de Livro",
      "num_paginas": 123,
      "isbn": "123-4567890123",
      "editora": "Exemplo Editora"
    },
  
  ]
  ```

### Obter Livro por ID

- **GET** `/livros/:id`
- **Resposta**:
  ```json
  {
    "id": "1",
    "titulo": "Exemplo de Livro",
    "num_paginas": 123,
    "isbn": "123-4567890123",
    "editora": "Exemplo Editora"
  }
  ```

### Criar Livro

- **POST** `/livros`
- **Requisição**:
  ```json
  {
    "id": "1",
    "titulo": "Novo Livro",
    "num_paginas": 200,
    "isbn": "111-2223334445",
    "editora": "Nova Editora"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Livro criado com sucesso",
    "livro": {
      "id": "1",
      "titulo": "Novo Livro",
      "num_paginas": 200,
      "isbn": "111-2223334445",
      "editora": "Nova Editora"
    }
  }
  ```

### Atualizar Livro

- **PUT** `/livros/:id`
- **Requisição**:
  ```json
  {
    "titulo": "Livro Atualizado",
    "num_paginas": 300,
    "isbn": "333-4445556667",
    "editora": "Editora Atualizada"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Livro atualizado com sucesso",
    "livroAtualizado": {
      "id": "1",
      "titulo": "Livro Atualizado",
      "num_paginas": 300,
      "isbn": "333-4445556667",
      "editora": "Editora Atualizada"
    }
  }
  ```

### Deletar Livro

- **DELETE** `/livros/:id`
- **Resposta**:
  ```json
  {
    "message": "Livro deletado com sucesso"
  }
  ```


