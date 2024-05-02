<template>
    <div class="container" style="min-height: 200vh;"> <!-- Añadiendo una altura mínima -->
        <!-- Imagen encima de las tarjetas -->
        <img src="../assets/programa.png" alt="Imagen encima de las tarjetas" class="img-fluid mb-4">

        <!-- Información sobre los graduados de Psicopedagogía -->
        <div class="text-center">
            <p>
                <strong style="text-transform: uppercase; font-size: 1.5rem;">¿Quiénes son?</strong><br>
                Los graduados de Psicopedagogía son profesionales especializados en el estudio y la intervención en procesos de aprendizaje y desarrollo, con un enfoque tanto en el ámbito educativo como en el clínico. Están capacitados para trabajar con personas que presentan dificultades en el aprendizaje, trastornos del desarrollo, discapacidades, entre otros.
            </p>
        </div>
        
        <!-- Título "Perfiles Académicos" -->
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h2>Perfiles Académicos</h2>
            </div>
        </div>
        
        <!-- Tarjetas en fila -->
        <div class="row mt-3 justify-content-center"> <!-- Añadido margen superior -->
            <!-- Tarjeta 1 -->
            <div class="col-md-4">
                <div class="card h-100"> <!-- Agregando la clase h-100 para establecer altura fija -->
                    <img src="../assets/usuario.png" class="card-img-top mx-auto" alt="..." style="max-width: 100px; max-height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Andrea Pastén</h5>
                        <p class="card-text">- Responsable Educación y Prevención- Proyecto Vida Sin Violencia<br>- Consultora en producción de material de prevención de violencia contra la mujer</p>
                    </div>
                </div>
            </div>
    
            <!-- Tarjeta 2 -->
            <div class="col-md-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/usuario.png" class="card-img-top mx-auto" alt="..." style="width: 100px; height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Nicole Stohmann</h5>
                        <p class="card-text">- Asistente Técnico del Rectorado de Sede La Paz at Universidad Católica Boliviana<br>- Multiple Subject Teacher<br>- Graduate Assistant</p>
                    </div>
                </div>
            </div>
            
            <!-- Tarjeta 3 -->
            <div class="col-md-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/usuario.png" class="card-img-top mx-auto" alt="..." style="width: 100px; height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Brian Argandoña</h5>
                        <p class="card-text">- Executive Assistant<br>- Asistente Tecnico<br>- Coordinador deportivo<br>- Gerente de operaciones y logistica<br>- Psicólogo Deportivo</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Título "Bolsa de Trabajo" y texto correspondiente -->
        <div class="row mt-5">
            <div class="col-md-6 text-center">
                <h2>Bolsa de Trabajo</h2>
                <p>Bienvenido a nuestra Bolsa de Trabajo para Graduados de Psicopedagogía. Creemos firmemente que una bolsa de trabajo bien diseñada es un recurso invaluable para conectar a los graduados de Psicopedagogía con las oportunidades laborales que se ajusten a sus habilidades y aspiraciones profesionales.
                En un mercado laboral cada vez más competitivo, reconocemos la importancia de proporcionar a los graduados de Psicopedagogía una plataforma centralizada donde puedan explorar y postularse a vacantes específicas en el campo de la Psicopedagogía y áreas relacionadas.</p>
            </div>
            <div class="col-md-6 text-center">
                <img src="../assets/bolsa.png" alt="Imagen de una bolsa de trabajo" class="img-fluid mb-4" style="max-width: 500px;">
            </div>
        </div>

        <!-- Base de datos de trabajos realizados -->
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h2>Base de datos de trabajos realizados en PSP y ramas afines</h2>
                <p>Se crea una base de datos que recopila trabajos realizados por graduados en Psicopedagogía (PSP) y áreas relacionadas. Esta base de datos puede incluir proyectos de investigación, intervenciones educativas, programas de formación, entre otros, con el objetivo de compartir experiencias y buenas prácticas en el campo de la psicopedagogía.</p>
            </div>
        </div>

        <!-- Imagen al final más pequeña -->
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <img src="../assets/base.png" alt="Imagen al final" class="img-fluid" style="max-width: 500px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticiasPage'
}
</script>

<style scoped>
/* Estilos para el título */
.titulo {
    font-family: 'Montserrat', Oswald, sans-serif; /* Cambiada la fuente */
    font-size: 3rem;
    color: #007bff; /* Cambiado el color a azul */
}

.card {
    margin-bottom: 20px; /* Reducido el espacio entre las tarjetas */
    height: auto; /* Altura automática para todas las tarjetas */
}

/* Estilos para los títulos de las tarjetas */
.card-title {
    font-family: 'Montserrat', Oswald, sans-serif; /* Cambiada la fuente */
    font-size: 1.50rem; /* Tamaño de fuente */
    color: #007bff; /* Cambiado el color a azul */
}

/* Estilos para la imagen encima de las tarjetas */
.img-fluid {
    width: 100%;
}

/* Estilos adicionales para el título '¿Dónde podrás trabajar?' */
.donde-trabajar-title {
    font-size: 2rem; /* Tamaño de fuente más grande */
}
</style>
