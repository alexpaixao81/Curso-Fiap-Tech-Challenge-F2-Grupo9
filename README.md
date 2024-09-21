# Curso-Fiap-Tech-Challenge-F2-Grupo9

# Projeto Gerenciamento de Livros

Este projeto é uma aplicação CRUD para gerenciar livros, desenvolvida utilizando Node.js, Express e PostgreSQL. 
A aplicação segue a arquitetura MVC e inclui endpoints para criar, ler, atualizar e deletar livros.

## Estrutura do Projeto

config
└── database.js
controllers
└── livroController.js
models
└── livro.js
public
├── index.html
└── styles.css
routes
└── livroRoutes.js
package-lock.json
package.json
server.js

## Requisitos

- Node.js
- PostgreSQL
- Sequelize

## Configuração do Banco de Dados

A configuração do banco de dados está no arquivo `config/database.js`:

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres.hnzivpqgschwyvursdzl',
  password: '',
  database: 'postgres',
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  port: 5432,
});

module.exports = sequelize;


Iniciando a Aplicação

1.Clone o repositório:

Copiar código
git clone <https://github.com/alexpaixao81/Curso-Fiap-Tech-Challenge-F2-Grupo9>

2.Instale as dependências:

cd <nome-do-repositório>
npm install

3.Configure o banco de dados PostgreSQL com as credenciais adequadas.

4.Inicie a aplicação:

npm start

5:Acesse a aplicação no navegador:

http://localhost:3000/public/index.html

Documentação: Postman
https://documenter.getpostman.com/view/12922384/2sA3kVkMTd

instalar o react
npm install react react-dom
