import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

export default class Resultado extends Component {

    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {/* Recorrer las imagenes y mostrar cada una en forma de card */}
                    {
                        imagenes.map(imagen => {
                            return (
                                <Imagen key={imagen.id} item={imagen} />
                            )
                        })
                    }
                </div>
                <Paginacion
                    paginaSiguiente={this.props.paginaSiguiente}
                    paginaAnterior={this.props.paginaAnterior}
                />
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
