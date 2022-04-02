import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./style.css"

export default class ListaDeNotas extends Component {

    constructor() {
        super();
        // this.state = { notas: [] };
        this.state = { notas: [{titulo: 'Nota sem titulo', texto: 'Nota sem conteúdo', categoria: 'Sem categoria'}]  };
        this._novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <ul>
                {this.state.notas.map((nota, index) => {
                    return (
                        <li key={index} className="listaNotas">
                            <CardNota
                                indice={index}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                apagarNota={this.props.apagarNota}
                                categoria={nota.categoria} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}