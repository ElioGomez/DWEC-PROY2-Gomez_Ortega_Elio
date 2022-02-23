import { LoremPicsum } from "react-lorem-picsum";
import React, { Component } from "react";

class Imagen extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div>
          <h2>Cambiar entre dos imagenes generadas de manera aleatoria</h2>
        <div className="col-md-6  mb-2">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            {/* Este es el boton para mostrar la imagen 1 */}
            <button
              type="button"
              id="btn-nquote"
              className="btn btn-success btn-sm"
              onClick={() => this.handleChange(false)}
            >
              Imagen 1
            </button>

            {/* Este es el boton para mostrar la imagen 2 */}
            <button
              type="button"
              id="btn-flex"
              className="btn btn-unique btn-sm"
              onClick={() => this.handleChange(true)}
            >
              Imagen 2
            </button>
          </div>
        </div>
        <span>
          {this.state.checked ? (
            <div /* Este es el div que tiene la primera imagen*/ className="redd" > <LoremPicsum width={800} height={450} /> </div>
          ) : (
            <div /* Este es el div que tiene la segunda imagen */ className="red2" ><LoremPicsum id={5} width={800} height={450} /> </div>
          )}
        </span>


      </div>
    );
  }
}



export default  Imagen