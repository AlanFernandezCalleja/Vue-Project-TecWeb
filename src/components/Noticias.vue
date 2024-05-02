<template>
    <div class="container" style="min-height: 280vh;"> <!-- Ajustado el tamaño mínimo de la altura -->
    
        <!-- Imagen encima de las tarjetas -->
        <img src="../assets/noticia.png" alt="Imagen encima de las tarjetas" class="img-fluid mb-4">

        <!-- Tarjetas en fila -->
        <div class="row mt-5 justify-content-center"> <!-- Añadido margen superior -->
            <!-- Tarjeta 1 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;"> <!-- Aumentada la altura de la tarjeta -->
                    <img src="../assets/not1.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;"> <!-- Reducida la altura de la imagen -->
                    <div class="card-body">
                        <h5 class="card-title">Primer encuentro de Sociedades Científicas Estudiantiles de Economía</h5>
                        <p class="card-text">Abr 29, 2024</p>
                    </div>
                </div>
            </div>
            
            <!-- Tarjeta 2 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not2.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">Concurso Serenata a la Virgen María</h5>
                        <p class="card-text">Abr 24, 2024</p>
                    </div>
                </div>
            </div>
            
            <!-- Tarjeta 3 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not3.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">La fe nos eleva sobre el mundo, nos lleva hacia un nivel de intereses más elevado</h5>
                        <p class="card-text">Abr 24, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 4 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not4.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">¡Campeones Indiscutibles!</h5>
                        <p class="card-text">Abr 24, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 5 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not5.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">Derecho presentó el libro: Derechos Humanos de las Personas Mayores en la Convención Interamericana sobre la Protección de los Derechos de las Personas Mayores»:</h5>
                        <p class="card-text">Abr 24, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 6 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not6.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">La U.C.B. fue anfitriona del Foro «Diálogo + Conocimiento: Una Suma que Multiplica de Solidar Suiza</h5>
                        <p class="card-text">Abr 23, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 7 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not7.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">Concluye con éxito el Taller Internacional «ELLAS» para fomentar el liderazgo de las mujeres en STEM en América Latina</h5>
                        <p class="card-text">Abr 23, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 8 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not8.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">Reconocimiento a la Excelencia Académica de los docentes 2-2023</h5>
                        <p class="card-text">Abr 22, 2024</p>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 9 -->
            <div class="col-md-4 d-flex align-items-center">
                <div class="card" style="width: 100%; height: 380px;">
                    <img src="../assets/not9.png" class="card-img-top mx-auto" alt="..." style="width: 354px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">El equipo de vehículos mecatrónicos de la U.C.B. retorna a Bolivia con el premio a la categoría “Most Improved Award” otorgado en la competencia internacional en la NASA</h5>
                        <p class="card-text">Abr 22, 2024</p>
                    </div>
                </div>
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
    font-family: 'Oswald', Helvetica, Arial, Lucida, sans-serif;
    font-size: 3rem;
    color: #222275;
}

.card {
    margin-bottom: 20px; /* Reducido el espacio entre las tarjetas */
    /* Aumentada la altura fija para todas las tarjetas */
}

/* Estilos para los títulos de las tarjetas */
.card-title {
    font-family: 'Oswald', sans-serif;
    /* Otros estilos para el título, como color, tamaño de fuente, etc. */
}

/* Estilos para la imagen encima de las tarjetas */
.img-fluid {
    width: 100%;
}
</style>
