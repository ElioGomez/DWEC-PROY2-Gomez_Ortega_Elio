import react from 'react';
import Sobre from './Sobre.js'
import Estudios from './Estudios.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Imagen from './Imagen.js';
import Proyecto from './Proyecto.js';
import Wordle from './Wordle.js';
import Pokedex from './pokedex.js';
import CV from './CV.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CRUD from './CRUD.js';

const App = ()=> (
<div className='Porfolio'>
  <Menu />
  <Sobre /> 
  <Estudios />
  <Proyecto />
  <CRUD />
  <Wordle />
  <Footer />
</div>  
)

export default App;
