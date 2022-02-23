import react from 'react';
import Prueba from './Prueba.js'
import Estudios from './Estudios.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Imagen from './Imagen.js';
import Proyecto from './Proyrcto.js';
import Recuperacion from './Recuperacion.js';
import Calculadora from './Calculadora.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> (
<div className='Porfolio'>
  <Menu />
  <Prueba /> 
  <Estudios />
  <Proyecto />
  <Calculadora />
  <Imagen />
  <Recuperacion />
  <Footer />
</div>  
)

export default App;
