import React, {
  Component,
  useState
} from 'react';
import { render }
  from 'react-dom';
import './App.css';
//Generamos una palabra aleatoria de la lista, para ello usamos Math, el cual nos genera un numero aleatorio 
const palabras = ["avion", "cielo", "pocas", "cairo", "oveja"];
let NRandom = (Math.ceil(Math.random() * palabras.length - 1))
let palabra = palabras[NRandom]
console.log(palabra)

//definimos la función principal Wordle
const Wordle = () => {
  //Definimos la variable correción  y su correspondiete setCorrecion, ademas de la llamada a useState que nos permite
  //desclarar una variable de estado y trabajar con ella durante todo el codigo
  const [correcion, setCorrecion] = useState([])

  //En esta función añadimos a una cadena de texto y le vamos añadiendo las comprovaciones que hacemos mas adelante
  const agregarCorrecion = event => {
    let i = 0

    event.preventDefault()

    //Definimos la palabra dada por el usuario como palabraU
    var palabraU = event.target.value

    let cadena = ""
    while (i < 5) {
      //comprobamos que la palabra sea de 5 letras
      if (palabraU.length == 5) {
        //Comprobamos una por una si las letras de palabraU coinciden en posición con la palabra a acertar
        if (palabraU[i] == palabra[i]) {
          cadena += palabraU[i] + " 📗 "
          //Comprobamos una por una si las letras de palabraU estan en la palabra a acertar
        } else if (palabra.includes(palabraU[i])) {
          cadena += palabraU[i] + " 📙 "
        }
        else {
          //En caso de que la letra no este mandamos esto
          cadena += palabraU[i] + " 📓 "
        }
        //Si acertamos la palabra recibimos este mensaje
        if (palabraU == palabra) {
          setCorrecion([
            ...correcion,
            "Palabra correcta " + "(" + palabraU + ")"
          ])
        } else {
          //Cuando la palabra no es correcta aquí imprimimos por pantalla las correciones
          setCorrecion([
            ...correcion,
            cadena
          ])
        }
        i++
      } else {
        alert("La palabra debe tener 5 letras")
        i = 5
      }
    }

  }
  return (
    <div className='wd'>
      <h2>Wordle (5 letras)</h2>
      <input type="text" name="InputCrear" onBlur={agregarCorrecion} />
      <div>
        {correcion.map(item => <div>{item}</div>)}
      </div>
    </div>
  )
}
export default Wordle;