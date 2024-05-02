<template>
    <div id="app" class="container-fluid"> <!-- Añadimos la clase container-fluid para que ocupe todo el ancho -->
        <nav class="navbar navbar-expand-lg navbar-dark custom-bg p-3"> <!-- Cambiamos la clase bg-dark por custom-bg para aplicar el color azul -->
            <div class="container"> <!-- Agregamos un contenedor para alinear el contenido -->
                <a class="navbar-brand fs-1 fw-bold" href="#">
                    <img src="./assets/Cato-logo.png" alt="UCB Logo" class="navbar-logo"> <!-- Agregamos el logo -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/"> Inicio </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/Formacion"> Formacion </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/Investigacion"> Investigacion </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/Noticias"> Noticias </router-link>
                        </li>
                        <!-- Agregamos los enlaces adicionales al Navbar -->
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/Postgrado"> Postgrado </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/ProgramaIntegral"> Programa Integral </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fs-5" to="/RedPsicopedagogia"> Red Psicopedagogia </router-link>
                        </li>
                    </ul>
                    <button type="button" class="btn fs-5 btn-success bg-succes mx-2">Login</button>
                    <button type="button" class="btn fs-5 btn-success bg-dark mx-2">Register</button>
                </div>
            </div>
        </nav><br>
        
        <!-- Agregamos una div para envolver el contenido y permitir el desplazamiento -->
        <div class="content-wrapper"> 
            <router-view></router-view>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'App'
    }
  </script>
  
  <style scoped>
    .navbar {
        margin: 2.2vh;
        border-radius: 20px;
    }
    .content-wrapper {
        height: calc(100vh - 56px); /* Calculamos la altura para dejar espacio para la barra de navegación */
        overflow-y: auto; /* Añadimos una barra de desplazamiento vertical si es necesario */
        padding: 20px; /* Agregamos un poco de espacio al contenido */
    }
    .custom-bg {
        background-color: #141a4e; /* Cambiamos el color de fondo a azul */
    }
    .navbar-logo {
        width: 200px; /* Ajustamos el tamaño del logo según sea necesario */
        height: auto; /* Mantenemos la proporción original del logo */
        margin-right: 10px; /* Ajustamos el margen derecho del logo */
    }
  </style>
  