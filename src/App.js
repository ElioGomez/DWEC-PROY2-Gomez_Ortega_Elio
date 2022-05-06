import react from 'react';
import Prueba from './Prueba.js'
import Estudios from './Estudios.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Imagen from './Imagen.js';
import Proyecto from './Proyecto.js';
import Pokedex from './pokedex.js';
import CV from './CV.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CRUD from './CRUD.js';

const App = ()=> (
<div className='Porfolio'>
  <Menu />
  <Prueba /> 
  <Estudios />
  <Proyecto />
  <CRUD />
  <CV />
  <Footer />
</div>  
)

export default App;
