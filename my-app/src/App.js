import React from 'react';
import './App.css'; // Import any custom styles

function App() {
  return (
    <div>
      <header className="bg-dark">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="index.html">
              Minha bibliô
            </a>
            <div id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id="homeLink" className="nav-link text-light" aria-current="page" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a id="livrosLink" className="nav-link text-light" href="catalogo.html">
                    Livros
                  </a>
                </li>
                <li className="nav-item">
                  <a id="adicionarLivroLink" className="nav-link text-light" href="adicionarlivro.html">
                    Adicionar livro
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="container mt-4">
        <div className="row">
          {/* Coluna do texto */}
          <div className="col-md-6 align-middle">
            <div>
              <h2 className="large-text">Minha biblioteca virtual</h2>
              <a className="btn btn-light-purple mt-3" href="catalogo.html">
                Livrinhos
              </a>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="col-md-6">
            <img
              src="img/biblioteca1.png"
              alt="uma pilha de livros com pessoas lendo"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
