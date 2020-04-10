import React, { Component } from 'react';

export default class Buscador extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         valorBusqueda: 'test'
    //     }
    //     this.updateValorBusqueda = this.updateValorBusqueda.bind(this);
    //     this.handlerBuscar = this.handlerBuscar.bind(this);
    // }

    // updateValorBusqueda(e) {

    //     this.setState({
    //         valorBusqueda: e.target.value
    //     });
    // }

    // handlerBuscar(e) {
    //     e.preventDefault();
    //     alert(this.state.valorBusqueda);
    // }

    //Otra forma de es utilizando ref

    busquedadRef = React.createRef();
    
    obtenerDatos = (e) => {
        e.preventDefault();

        this.props.onBuscar(this.busquedadRef.current.value);

    }
  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
          <div className="row">
              <div className="form-group col-md-8">
                  <input ref={this.busquedadRef} type="text" className="form-control form-control-lg"
                    placeholder="Busca tu Imagen. Ejm: Carros"
                    // value={this.valorBusqueda}
                    // onChange={this.updateValorBusqueda}
                     />
              </div>

              <div className="form-group col-md-4">
                  <input type="submit" className="btn btn-lg btn-danger btn-block"
                    value="Buscar..." 
                    // onClick={this.handlerBuscar} 
                    />
              </div>
          </div>
      </form>
    );
  }
}

