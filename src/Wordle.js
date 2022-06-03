import React, {
  Component,
  useState
} from 'react';
import { render }
  from 'react-dom';
import './App.css';
import swal from 'sweetalert';
//Generamos una palabra aleatoria de la lista, para ello usamos Math, el cual nos genera un numero aleatorio 
const palabras = ["avion", "cielo", "pocas", "cairo", "oveja"];
let NRandom = (Math.ceil(Math.random() * palabras.length - 1))
let palabra = palabras[NRandom]
console.log(palabra)
let juego = true
let intentos = 7
//definimos la función principal Wordle



const Wordle = () => {
  //Definimos la variable correción  y su correspondiete setCorrecion, ademas de la llamada a useState que nos permite
  //desclarar una variable de estado y trabajar con ella durante todo el codigo
  const [correcion, setCorrecion] = useState([])
  const [isDisabled, setIsDisabled] = useState(false);

  //En esta función añadimos a una cadena de texto y le vamos añadiendo las comprovaciones que hacemos mas adelante
  const agregarCorrecion = event => {

    if (event.key === 'Enter' && juego == true) {
      let i = 0
      event.preventDefault()
      //Definimos la palabra dada por el usuario como palabraU
      var palabraU = event.target.value
      palabraU = palabraU.toString().toLowerCase()
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
            event.target.value = ""
            setCorrecion([
              ...correcion,
              "Palabra correcta " + "(" + palabraU + ")"
            ])
            swal({
              title: "Felicidades",
              text: "La palabra " + palabraU + " era la palabra correcta",
              icon: "success"
            })
            juego = false
            setIsDisabled(!isDisabled)
          } else {
            //Cuando la palabra no es correcta aquí imprimimos por pantalla las correciones
            event.target.value = ""
            setCorrecion([
              ...correcion,
              cadena
            ])

          }
          i++

        } else {
          swal({
            title: "ERROR",
            text: "La palabra " + palabraU + " tiene menos de 5 letras",
            icon: "error"
          })
          i = 5
          intentos++

          event.target.value = ""
        }
      }
      intentos = intentos - 1
        if (intentos <= 0) {
      swal({
        title: "SUERTE LA PROXIMA",
        text: "No te quedan mas intentos",
        icon: "error"
      })
      setCorrecion([
        ...correcion,
        "No te quedan intentos"
      ])
      juego = false
      setIsDisabled(!isDisabled)
    }
    }
 
  }


  const Reiniciar = () =>{
    window.location.reload(false);
  }
   

  return (
    <div className='wd' id='wd'>
      <h2>Wordle</h2>
      <p>
        <ol>
          <li>1.Adivina la palabra oculta en 6 intentos</li>
          <li>2.Cada palabra debe contener 5 caracteres</li>
          <li>3.Debe presionar Enter para enviar la palabra</li>
          <li>4.Despues de cada intento a cada letra de tu palabra se le da un color:</li>
          <li>-Esta en la posicion: 📗 </li>
          <li>-Esta pero no en la posicion: 📙</li>
          <li>-No esta: 📓</li>
        </ol>
      </p>
      <input type="text" name="InputCrear" className='InputCrear' id='InputCrear' disabled={isDisabled} maxLength={5} onKeyPress={agregarCorrecion} />
      <div>
        <button onClick={Reiniciar} disabled={false}>Reiniciar</button>
        {correcion.map(item => <div>{item}</div>)}
      </div>
    </div>
  )
}
export default Wordle;