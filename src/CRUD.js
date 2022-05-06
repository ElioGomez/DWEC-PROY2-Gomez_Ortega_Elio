import React, { Component } from 'react';
import './App.css';
class CRUD extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editar: false,
      id: null,
      Juegos: [{
        id: '1',
        titulo: 'Pokemon Leyendas',
        pasado: false,
      }, {
        id: '2',
        titulo: 'Stardew Valley',
        pasado: false,
      }, {
        id: '3',
        titulo: 'Mario Land',
        pasado: false,
      }, {
        id: '4',
        titulo: 'Deltarun',
        pasado: false,
      }]
    }
  }

  onCrearHandle(event) {
    event.preventDefault();

    this.setState({
      Juegos: [...this.state.Juegos, {
        id: Date.now(),
        titulo: event.target.InputCrear.value,
        pasado: false,
      }]
    });

    event.target.InputCrear.value = '';
  }

  onEliminarHandle() {
    let id = arguments[0];

    this.setState({
      Juegos: this.state.Juegos.filter(juego => {
        if (juego.id !== id) {
          return juego;
        }
      })
    });
  }

  onEditarHandle() {
    this.setState({
      editar: true,
      id: arguments[0],
      titulo: arguments[1]
    });
  }

  onActualizarHandle(event) {
    event.preventDefault();

    this.setState({
      Juegos: this.state.Juegos.map(juego => {
        if (juego.id === this.state.id) {
          juego['titulo'] = event.target.ActualizarJuego.value;
          return juego;
        }

        return juego;
      })
    });

    this.setState({
      editar: false
    });
  }

  onPasadoHandle() {
    let id = arguments[0];

    this.setState({
      Juegos: this.state.Juegos.map(juego => {
        if (juego.id === id) {
          juego['pasado'] = true;
          return juego;
        }

        return juego;
      })
    });
  }

  InputEditar() {
    if (this.state.editar) {
      return <form onSubmit={this.onActualizarHandle.bind(this)}>
        <input type="text" name="ActualizarJuego" defaultValue={this.state.titulo} />
        <button>Cambiar Juego</button>
      </form>
    }
  }

  render() {
    return (
      <div className='VideoJ' id='CRUD'>
        <h2>CRUD de videojuegos pendientes</h2>
        {this.InputEditar()}
        <form onSubmit={this.onCrearHandle.bind(this)}>
          <input type="text" name="InputCrear"/>
          <button>¿Otro juego mas?</button>
        </form>
        <ul className='VideoJ'>
          {this.state.Juegos.map(juego => (
            <li key={juego.id} className={ juego.pasado ? 'pasado' : 'pendiente' }>
              {juego.titulo}
              <button className='VideoJ' onClick={this.onEliminarHandle.bind(this, juego.id)}>Eliminar</button>
              <button className='VideoJ' onClick={this.onEditarHandle.bind(this, juego.id, juego.titulo)}>Editar</button>
              <button className='VideoJ' onClick={this.onPasadoHandle.bind(this, juego.id)}>Pasado</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CRUD;
