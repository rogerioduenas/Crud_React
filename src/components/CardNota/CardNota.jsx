import React, { Component } from 'react';
import "./style.css"
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg"

export default class CardNota extends Component {
    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice)
    }
    render() {
        return (
            <section className='cardNota'>
                <header>
                    <h3>{this.props.titulo}</h3>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p>{this.props.texto}</p>
                <DeleteSVG onClick={this.apagar.bind(this)} />
            </section>
        );
    }
}


