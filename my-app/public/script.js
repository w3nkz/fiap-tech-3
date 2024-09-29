// script.js


// Função para definir os links de navegação
function setupNavigation() {
    // Mapeia os IDs dos botões para suas respectivas páginas
    const navMap = {
        'homeLink': 'index.html',
        'livrosLink': 'catalogo.html',
        'adicionarLivroLink': 'adicionarlivro.html',
        'editarLivroLink': 'editarlivro.html',
        'visualizarLivroLink': 'visualizarlivro.html'
    };

    // Adiciona eventos de clique nos elementos de navegação
    Object.keys(navMap).forEach(id => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener('click', function () {
                window.location.href = navMap[id];
            });
        }
    });
}

// Função para realizar fetch de livros do backend
async function fetchBooks() {

    try { 
        const response = await fetch("http://localhost:3000/livros");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const livros = await response.json();
        displayBooks(livros);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
    }
}

// Função para exibir livros na tabela
function displayBooks(livros) {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ""; // Limpa as linhas existentes
    livros.forEach(livro => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${livro._id}</td>
            <td>${livro.nome}</td>
            <td>${livro.autor}</td>
            <td>${livro.editora}</td>
            <td>
                <a href="visualizarlivro.html?id=${livro._id}" class="btn btn-primary btn-action">Visualizar</a>
                <a href="editarlivro.html?id=${livro._id}" class="btn btn-warning btn-action">Editar</a>
                <button class="btn btn-danger btn-action" onclick="deleteBook('${livro._id}')">Deletar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para criar livros novos na página adicionarlivro.html
function createBook(){
    console.log(document.formulario.titulo.value);
    console.log(document.formulario.autor.value);
    console.log(document.formulario.editora.value);
    let toSend = {
        "nome":document.formulario.titulo.value,
        "autor":document.formulario.autor.value,
        "editora":document.formulario.editora.value
    }
    try {
        fetch("http://localhost:3000/livros",{
            method: "POST",
            body: JSON.stringify(toSend),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                    }
                }
            );
        alert("Livro " + document.formulario.titulo.value + " foi adicionado!")
        document.formulario.reset();
        document.formulario.titulo.focus()
    }
    catch (error){
        console.error("Erro ao adicionar livro:", error);
    }
}

// Função para mostrar livros na página visualizarlivro.html
async function viewBook(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);

    try { 
        const response = await fetch(`http://localhost:3000/livros/${myParam}`, {
            method: 'GET'
        });
        // console.log("ello");
        const livro = await response.json();
        // .json();
        // console.log(livro);

        document.getElementById("titulo").innerHTML = livro.nome;
        document.getElementById("autor").innerHTML = livro.autor;
        document.getElementById("editora").innerHTML = livro.editora;
        document.getElementById("editar").href = `editarlivro.html?id=${myParam}`;
        // document.getElementById("btn-deletar").onClick= window.deleteBook(myParam);

    } catch (error) {
        console.error("Erro ao buscar livros:", error);
    }
}

// Função para mostrar o livro na página editarlivro.html
async function loadBook(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);

    try { 
        const response = await fetch(`http://localhost:3000/livros/${myParam}`, {
            method: 'GET'
        });
        // console.log("ello");
        const livro = await response.json();
        // // .json();
        // console.log(livro);
        // console.log(myParam)
        
        document.getElementById("titulo").value = livro.nome;
        document.getElementById("autor").value = livro.autor;
        document.getElementById("editora").value = livro.editora;
        

    } catch (error) {
        console.error("Erro ao buscar livros:", error);
    }
}

// Função para editar o livro na página editarlivro.html
async function editBook() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);

    let toSend = {
        "nome":document.formulario.titulo.value,
        "autor":document.formulario.autor.value,
        "editora":document.formulario.editora.value
    }
    try {
        fetch(`http://localhost:3000/livros/${myParam}`,{
            method: "PUT",
            body: JSON.stringify(toSend),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                    }
                }
            );
        alert("Livro " + document.formulario.titulo.value + " foi editado!")
        window.location.href="catalogo.html"
    }
    catch (error){
        console.error("Erro ao adicionar livro:", error);
    }
}

// Função para deletar um livro
window.deleteBook = async (id) => {
    if (confirm("Você realmente deseja deletar este livro?")) {
        try {
            await fetch(`http://localhost:4000/livros/${id}`, {
                method: 'DELETE'
            });
            fetchBooks(); // Atualiza a lista após a exclusão
        } catch (error) {
            console.error("Erro ao deletar livro:", error);
        }
    }
};

async function eraseBook(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);
    window.deleteBook(myParam)
    window.location.href="catalogo.html"
}

// Executa a função após o carregamento da página
document.addEventListener('DOMContentLoaded', setupNavigation);
