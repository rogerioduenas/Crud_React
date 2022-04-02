import React, { Component } from "react";
import "./style.css"

export default class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "Nota sem titulo";
        this.texto = "Nota sem conteúdo";
        this.categoria = "Sem categoria";
        this.state = { categorias: [] };
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;

    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;

    }

    _handleMudancaCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    render() {
        return (
            <form
                className="formCadastro"
                onSubmit={this._criarNota.bind(this)}>
                <input
                    type="text"
                    placeholder="Título"
                    onChange={this._handleMudancaTitulo.bind(this)} />
                <select
                    onChange={this._handleMudancaCategoria.bind(this)}>
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <textarea
                    rows={10}
                    placeholder="Escreva sua nota..."
                    onChange={this._handleMudancaTexto.bind(this)} />
                <button>Criar Nota</button>
            </form>
        )
    }
}


