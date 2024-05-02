<template>
    <div class="container" style="min-height: 520vh;"> <!-- Añadiendo una altura mínima -->
        <!-- Imagen encima de las tarjetas -->
        <img src="../assets/postgrado.png" alt="Imagen encima de las tarjetas" class="img-fluid mb-4">

        <!-- Imagen encima de las tarjetas -->
        <div class="row justify-content-center mb-4">
            <img src="../assets/fotopsico.png" alt="Embárcate en el camino de la Psicopedagogía" class="img-fluid" style="max-width: 50%;">
        </div>

        <!-- Información sobre los cursos de Psicopedagogía -->
        <div class="text-center">
            <p>Embárcate en el camino de la Psicopedagogía y conviértete en un experto capaz de diseñar, implementar y administrar propuestas educativas tanto en entornos presenciales como virtuales, abarcando los cuatro campos profesionales: clínico, educativo, social y laboral. Todo ello se fundamenta en una sólida formación basada en competencias, impregnada de un espíritu humanista, crítico e innovador.
            Únete a la vanguardia de la renovación educativa y contribuye activamente a la transformación social.</p>
        </div>
        
        <!-- Tarjetas en fila -->
        <div class="row mt-5 justify-content-center"> <!-- Añadido margen superior -->
            <!-- Tarjeta 1 -->
            <div class="col-md-4">
                <div class="card h-100"> <!-- Agregando la clase h-100 para establecer altura fija -->
                    <img src="../assets/tarjeta1.png" class="card-img-top mx-auto" alt="..." style="max-width: 100px; max-height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Duración de la Carrera</h5>
                        <p class="card-text">9 semestres</p>
                    </div>
                </div>
            </div>
    
            <!-- Tarjeta 2 -->
            <div class="col-md-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/tarjeta2.png" class="card-img-top mx-auto" alt="..." style="width: 100px; height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Áreas de Estudio</h5>
                        <p class="card-text">- Psicopedagogía de la Educación Formal y No Formal<br>- Psicopedagogía Clínica<br>- Psicopedagogía Social<br>- Psicopedagogía Laboral</p>
                    </div>
                </div>
            </div>
            
            <!-- Tarjeta 3 -->
            <div class="col-md-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/tarjeta3.png" class="card-img-top mx-auto" alt="..." style="width: 100px; height: 100px;">
                    <div class="card-body">
                        <h5 class="card-title">Modalidades de Graduación</h5>
                        <p class="card-text">- Graduación por excelencia<br>- Tesis<br>- Proyecto de Grado<br>- Trabajo Dirigido<br>- Graduación vía Diplomado</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Texto a la izquierda de las tarjetas -->
            <div class="col-md-6 mt-5">
                <p>
                    <strong class="donde-trabajar-title">¿Dónde podrás trabajar?</strong><br> <!-- Aplicando el estilo aquí -->
                    - En sector educativo: educación inicial, primaria, secundaria, universitaria, técnica tecnológica que desarrollan procesos formativos en instituciones públicas, privadas y de convenio.<br>
                    - En proyectos y programas educativos que mejoran la calidad de vida de diferentes poblaciones desde ministerios, municipios, fundaciones y ONG´s.<br>
                    - En empresas públicas y privadas que desarrollan gestión del conocimiento desde sus departamentos de Recursos Humanos y sus unidades de capacitación.<br>
                    - Desarrollando su propio emprendimiento Centros psicopedagógicos y Centros de Educación integral que trabajan con niñez, adolescencia, juventud y adultos que presenten dificultades del aprendizaje y necesidades educativas especiales.<br>
                    - Consultoría en áreas de investigación en necesidades de formación, desarrollo de programas educativos presenciales y virtuales, educación off line y on line, entre otras.
                </p>
            </div>

            <!-- Imagen a la derecha del texto -->
            <div class="col-md-6 mt-5">
                <img src="../assets/niños.png" alt="Niños" class="img-fluid" style="max-width: 100%;">
            </div>
        </div>

        <!-- Nuevo título -->
        <div class="row mt-3"> <!-- Ajustando el margen superior -->
            <div class="col-md-12 text-center">
                <h2>Directora y Docentes</h2>
            </div>
        </div>

        <!-- Tarjetas adicionales -->
        <div class="row mt-3 justify-content-center"> <!-- Ajustando el margen superior -->
            <!-- Tarjeta 4 -->
            <div class="col-md-4 mt-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/tarjeta4.png" class="card-img-top mx-auto" alt="..." style="width: 200px; height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title">Dra. Alejandra Martínez Barrientos</h5>
                        <p class="card-text">Directora de Carrera</p>
                        <p class="card-text">mmartinez@ucb.edu.bo</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 5 -->
            <div class="col-md-4 mt-4">
                <div class="card h-100" style="width: 100%;">
                    <img src="../assets/tarjeta5.png" class="card-img-top mx-auto" alt="..." style="width: 200px; height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title">MSc. Karina García Riveros</h5>
                        <p class="card-text">Docente Tiempo Completo</p>
                        <p class="card-text">rgarcia@ucb.edu.bo</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lista de requisitos para estudiantes nuevos -->
        <div class="row mt-5">
            <div class="col-md-6">
                <h2>Requisitos para Estudiantes Nuevos</h2>
                <ul>
                    <li>Fotocopia legalizada original del Diploma de bachiller.</li>
                    <li>Fotocopia simple de la libreta de sexto de secundaria.</li>
                    <li>Fotocopia simple del Carnet de Identidad.</li>
                    <li>Certificado de nacimiento original actualizado.</li>
                    <li>Tres fotografías a color 3×3 fondo celeste o plomo claro.</li>
                    <li>Cumplir y aprobar los procedimientos de ingreso a la Universidad.</li>
                    <li>Recabar el seguro contra accidentes ofrecido por la U.C.B.</li>
                </ul>
            </div>
            <div class="col-md-6">
                <img src="../assets/nuevos.png" alt="Estudiantes Nuevos" class="img-fluid" style="max-width: 50%;">
            </div>
        </div>

        <!-- Título y requisitos para estudiantes extranjeros -->
        <div class="row mt-5">
            <div class="col-md-6 order-md-2">
                <img src="../assets/extranjero.png" alt="Estudiantes Extranjeros" class="img-fluid" style="max-width: 66%;">
            </div>
            <div class="col-md-6 order-md-1">
                <h2>Requisitos para Estudiantes Extranjeros</h2>
                <ul>
                    <li>Resolución de homologación del Título de Bachiller debidamente legalizado. Provisionalmente por un semestre, se aceptará la fotocopia simple del Título de Bachiller, pudiendo prorrogarse excepcionalmente este plazo por causas justificadas y debidamente acreditadas. *Nota: Todo trámite debe ser realizado por el interesado.</li>
                    <li>Fotocopia simple de cédula de extranjero o fotocopia del pasaporte con la respectiva visa de residente o estudiante, tanto el pasaporte y visa deben estar vigentes.</li>
                    <li>Certificado de nacimiento original apostillado. Provisionalmente por un semestre, se aceptará la fotocopia simple del certificado de nacimiento o fotocopia simple del pasaporte, pudiendo prorrogarse excepcionalmente este plazo por causas justificadas y debidamente acreditadas. *Nota: Todo trámite debe ser realizado por el interesado.</li>
                    <li>Tres fotografías a color 3×3 fondo celeste o plomo claro.</li>
                    <li>Cumplir y aprobar los procedimientos de ingreso a la Universidad.</li>
                    <li>Recabar el seguro contra accidentes ofrecido por la U.C.B.</li>
                </ul>
            </div>
        </div>

        <!-- Información de contacto -->
        <div class="row mt-5">
            <div class="col-md-12">
                <h2>Atención de Dirección de Carrera</h2>
                <p>Av. 14 de Septiembre y Calle 2 de Obrajes – Bloque N – Jardín posterior</p>
                <p><strong>Departamento de Psicopedagogía</strong></p>
                <p><strong>Bloque N</strong></p>
                <p><strong>Horarios de atención:</strong> de lunes a viernes de 08:30 a 16:30</p>
                <p><strong>Contacto:</strong> 2782222 Int. 2872</p>
                <p><strong>WhatsApp:</strong> 73231313 – 77294940</p>
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
