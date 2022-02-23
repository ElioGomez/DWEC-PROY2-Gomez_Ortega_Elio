import React from 'react';

    const Menu = ()=>(  
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="#">Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Sobre mi <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Estudios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Proyectos</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Calculadora</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Imagenes Random</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Recuperacion</a>
      </li>

      

    </ul>

  </div>
</nav>
    )
    export default Menu;