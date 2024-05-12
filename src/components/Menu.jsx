import React from "react";
import '../assets/menu.css';

function Menu() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid"> <a class="navbar-brand" href="index.html">
      <img class="logo" src="media/logo.png" alt="logo"></img>
      <p class="max-font-26"><span>RBD School</span></p>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto"> <li class="nav-item">
          <a class="nav-link max-font-26" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link max-font-26" href="#">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link max-font-26" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link max-font-26" href="#">Connexion</a>
        </li>
      </ul>
    </div>
</nav>
    );
}

export default Menu;
