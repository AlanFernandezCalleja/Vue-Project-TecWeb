<template>
    <!-- Contenedor principal de la página -->
    <div class="page-container"> 
        <div class="container">
            <h1 class="titulo">PAGINA PRINCIPAL</h1>
  
            <!-- Contenedor del carousel -->
            <div class="carousel-container">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2023/09/dicasterio.png" class="d-block w-100" alt="Imagen 1">
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.ucb.edu.bo/wp-content/uploads/2024/01/BANER-UCB-2-WEB-2024.jpg" class="d-block w-100" alt="Imagen 2">
                        </div>
                        <div class="carousel-item">
                            <img src="https://iccsi.com.ar/wp-content/uploads/como-ingresar-al-siaan-ucb.webp" class="d-block w-100" alt="Imagen 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
  
            <!-- Tarjetas en fila -->
            <div class="row mt-5 justify-content-center">
                <!-- Tarjeta 1 - ¿Quiénes Somos? -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/acerca.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">¿Quiénes Somos?</h5>
                            <p class="card-text">En el Departamento de Psicopedagogía de la Universidad Catolica San Pablo, nos dedicamos a formar profesionales comprometidos con el desarrollo integral de las personas. Con una sólida base teórica y práctica, nuestros estudiantes están preparados para abordar los desafíos del aprendizaje en diversos contextos educativos.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Tarjeta 2 - Misión -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/mision.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Misión</h5>
                            <p class="card-text">Nuestra misión es formar psicopedagogos capaces de comprender y atender las necesidades educativas de individuos con diversidad de aprendizaje. A través de una educación de calidad y valores éticos, contribuimos al bienestar y desarrollo de la sociedad.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Tarjeta 3 - Visión -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/vision.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Visión</h5>
                            <p class="card-text">Nos proyectamos como líderes en la formación de psicopedagogos altamente calificados y comprometidos con la mejora continua de la educación. Buscamos ser reconocidos a nivel nacional e internacional por nuestra excelencia académica, investigación innovadora y servicio a la comunidad.</p>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta 4 - Perfil del Estudiante PSP - UCB -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/estudiantes.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Perfil del Estudiante PSP - UCB</h5>
                            <p class="card-text">El estudiante de Psicopedagogía en la Universidad Catolica San Pablo se caracteriza por su vocación de servicio, empatía y capacidad para trabajar en equipo. Valoramos el compromiso con la inclusión educativa, la adaptabilidad y la creatividad para encontrar soluciones a los desafíos del aprendizaje.</p>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta 5 - Contactos -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/contactos.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Contactos</h5>
                            <p class="card-text">Para más información sobre nuestra carrera y actividades, no dudes en contactar con nosotros:</p>
                            <ul>
                                <li>Correo Electrónico: psicopedagogia@ucb.edu.bo</li>
                                <li>Directora de Carrera: Dra. María Pérez - mperez@ucb.edu.bo</li>
                                <li>Coordinador de Prácticas: Lic. Juan Martínez - jmartinez@ucb.edu.bo</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta 6 - Enlaces -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/ucb.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Enlaces</h5>
                            <p class="card-text">Puedes encontrar más información sobre la carrera de Psicopedagogía y recursos educativos en los siguientes enlaces:</p>
                            <ul>
                                <li>Página Web del Departamento de Psicopedagogía: <a href="www.universidadsanpablo.edu/psicopedagogia">www.universidadsanpablo.edu/psicopedagogia</a></li>
                                <li>Programa de Becas y Ayudas Financieras: <a href="www.universidadsanpablo.edu/becas">www.universidadsanpablo.edu/becas</a></li>
                                <li>Biblioteca Virtual de Educación: <a href="www.universidadsanpablo.edu/biblioteca">www.universidadsanpablo.edu/biblioteca</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

               <!-- Pie de página de contactos -->
<footer class="footer">
    <div class="container">
        <h2>Contactos</h2>
        <ul>
            <li>Departamento de Psicopedagogía</li>
            <li>Universidad San Pablo</li>
            <li>Calle Bolívar #1234, La Paz, Bolivia</li>
            <li>Teléfono: +591 2 3456789</li>
            <li>Correo Electrónico: info@universidadsanpablo.edu</li>
        </ul>
     </div>
</footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InicioPage'
}
</script>

<style scoped>
/* Estilos para el contenedor del carousel */
.carousel-container {
    max-width: 1100px;
    margin: 0 auto;
}

/* Estilos para las tarjetas */
.card {
    margin-bottom: 20px;
}

/* Estilos para el título */
.titulo {
    font-family: 'Oswald', Helvetica, Arial, Lucida, sans-serif; /* Oswald seguido de fuentes de respaldo */
    font-size: 3rem;
    color: #222275;
}

/* Estilos para los títulos de las tarjetas */
.card-title {
    font-family: 'Oswald', sans-serif;
    /* Otros estilos para el título, como color, tamaño de fuente, etc. */
}

.page-container {
    min-height: 180vh; /* Establece una altura mínima igual al alto de la ventana del navegador */
    position: relative; /* Establece la posición relativa para poder posicionar el pie de página */
}



</style>
