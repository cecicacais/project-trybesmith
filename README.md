## Projeto - Trybesmith
 O objetivo desse projeto é desenvolver um CRUD (Create, Read, Update, Delete) de itens medievais, no formato de uma API, utilizando Typescript.
 Através de alguns endpoints criados para ler e escrever em um banco de dados, utilizando o MySQL.

<p align="center">
<img src="/assets/trybesmith.gif">
</p>

## Como executar o projeto

1. Clone o repositorio no seu computador
  - `git clone git@github.com:cecicacais/project-trybesmith.git`
  - Entre na pasta do repositorio clonado:
    - `cd project-trybesmith`

2. Instale as dependências
  - `npm install`

3. Crie as variaveis de ambiente:
  - Crie um arquivo .env com as seguintes variaveis:
    ```sh
      MYSQL_HOST=seu-host-mysql
      MYSQL_USER=seu-usuario-mysql
      MYSQL_PASSWORD=sua-senha-mysql
      JWT_SECRET=qualquer-string-aleatoria
    ```
4. Você pode startar a aplicação usando os comandos:
  - `npm start` - ou
  - `npm run dev`

## Sugestão de ferramentas
  - MySQL Workbench: Para criação do banco de dados, pode estar copiando o arquivo Trybesmith.sql;
  - Thunder Client: Uma extensão do Visual Studio Code, para fazer as requisições no banco de dados;

## Referências:
1. Arquivo Trybesmith.sql
  - Foi disponibilizado pela Trybe, para criação do banco de dados inicial do projeto.

