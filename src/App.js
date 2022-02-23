import react from 'react';
import Prueba from './Prueba.js'
import Estudios from './Estudios.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Imagen from './Imagen.js';
import Proyecto from './Proyrcto.js';
import Recuperacion from './Recuperacion.js';
import Perfil from './img/Perfil.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> (
<div>
  <Menu />
  <img src={Perfil} width="60px" ></img>
  <Prueba /> 
  <Estudios />
  <Proyecto />
  <Imagen />
  <Recuperacion />
  <Footer />
</div>  
)

export default App;
