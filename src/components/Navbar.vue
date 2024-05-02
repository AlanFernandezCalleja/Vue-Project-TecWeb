<template>
  <nav>
    <ul>
      <li><router-link to="/">Pagina Principal</router-link></li>
      <li><router-link to="/formacion">Formación Academica</router-link></li>
      <li><router-link to="/formacion">POSTGRADO</router-link></li>
      <li><router-link to="/formacion">Programa Integral</router-link></li>
      <li><router-link to="/formacion">Red Psicopedagogia</router-link></li>
      <li><router-link to="/investigacion">Investigación</router-link></li>
      <li><router-link to="/noticias">Noticias</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
/* Estilos de la barra de navegación */
</style>
