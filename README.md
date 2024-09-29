# Fase 3 - TECH CHALLENGE - Integração Frontend/Backend

## Descrição 

Projeto de integração entre Frontend (utilizando React, bem como HTML, CSS e Bootstrap) e Backend (API com Node.js + Express e MongoDB, realizando CRUD) em um catálogo de livros que pode ser alterado diretamente pelo Frontend.

## Passos para executar o Projeto 

1. Antes de qualquer coisa, é necessário que tenha-se todo o **[projeto do backend](https://github.com/pgpribeiro/node-express-mongo-api)**, seguindo as instruções contidas no repositório. (realizado no Tech Challenge da Fase 2).

2. Instalar **[Node.js](https://nodejs.org/en/)** caso ainda não tenha.
 
3. Através do Console de Comando, instalar cors, mongoose e express:

   `npm install express`

   `npm install mongoose`

   `npm install cors`

4. Clonar este repositório através do **Git** (instalado na Fase 2).
 
5. Realizar a instalação da extensão ['Moesif CORS'](https://chromewebstore.google.com/detail/moesif-origincors-changer/digfbfaphojjndkpccljibejjbppifbc) no Google Chrome, deixando-a habilitada.

## Criando a aplicação React
6. Na pasta de sua preferência, crie a aplicação React pelo Console de Comando:

   `npx create-react-app [nome desejado da aplicação]`

7. Copie os arquivos do repositório clonado para essa nova pasta React, sobrescrevendo os arquivos.
   
8. Inicie a aplicação react na pasta React que você criou através do Console de Comando, utilizando comandos como:
 
   `cd [sua pasta]`
   
   `npm start`
   
   Alternativamente, você pode abrir essa pasta através de um editor de código como **VS Code (Visual Studio Code)**, abrir um terminal nessa pasta e utilizar também:
   
   `npm start`
   
   
9. Abrir o endereço http://localhost:3006 no Google Chrome para a página inicial da aplicação (o React geralmente abre essa página sozinho).

## Realizando CRUD no Frontend

Na página inicial, é possível navegar para 2 outras páginas diferentes: **Livros** (catálogo) e **Adicionar Livro** (realizar POST através do Frontend)
1. A página **Livros** permite **Visualizar**, **Editar** ou **Deletar** o livro específico (GET, PUT e DELETE, respectivamente)
2. A página **Adicionar Livro** permite que você adicione um livro de sua preferência, colocando-o no catálogo de livros.
   
   `Tempos Líquidos
    Zygmunt Bauman
    Zahar`
   
3. A página **Visualizar** exibe apenas um livro específico, sendo possível **Editar**, **Deletar** ou Voltar à página de catálogo
4. A página **Editar Livro** permite que você faça alterações ao livro escolhido.
   
