import React from 'react';

    const Menu = ()=>(  
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav2">

  <a class="navbar-brand" href="#">Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#SM">Sobre mi <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Estudios">Estudios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Proyectos">Proyectos</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#CRUD">CRUD</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#wd">Wordle</a>
      </li>

      

    </ul>

  </div>
</nav>
    )
    export default Menu;