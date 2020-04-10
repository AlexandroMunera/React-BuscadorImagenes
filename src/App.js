import React, { Component } from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    termino: '',
    pagina: '',
    imagenes: []
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () => {
    // Leer el valor de pagina
    let pagina = this.state.pagina;
    //Validar si estoy en la pagina 1 para no reducir mas
    if(pagina === 1) return null;
    //Aumentar el valor de pagina
    pagina--;
    //Actualizar el valor de pagina
    this.setState({pagina}, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    // Leer el valor de pagina
    let pagina = this.state.pagina;
    //Aumentar el valor de pagina
    pagina++;
    //Actualizar el valor de pagina
    this.setState({pagina}, () => {
      this.consultarApi();
      this.scroll();

    });
  }

  consultarApi = () => {
    const {termino,pagina} = this.state;

    const url = `https://pixabay.com/api/?key=15972966-610635582880022f3804ddbed&q=${termino}&image_type=photo&pretty=true&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));

  }

  onRealizarBusqueda = (text) => {
    this.setState({
      termino: text,
      pagina: '1'
    }, () => {
      this.consultarApi();
    });
  }

  render() {
    return (

      <div className="app container">

        <div className="jumbotron">
          <p className="lead text-center">Buscardor de Imagenes</p>

          <Buscador onBuscar={this.onRealizarBusqueda} />
        </div>

        <div className="row justify-content-center">

          <Resultado imagenes={this.state.imagenes}
            paginaSiguiente={this.paginaSiguiente}
            paginaAnterior={this.paginaAnterior} />

        </div>

      </div>
    );
  }
}

export default App;
