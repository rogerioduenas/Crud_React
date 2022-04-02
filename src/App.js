import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Notas';
import "./App.css";


export default class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className='formNota'>
        <div>
          <FormularioCadastro
            categorias={this.categorias}
            criarNota={this.notas.adicionarNota.bind(this.notas)} />
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
        </div>
        <main>
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)} />
        </main>
      </section>
    )
  }

}


