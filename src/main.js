import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' 
import App from './App.vue'

// Importa tus componentes de páginas
import InicioPage from '../src/components/Inicio.vue'
import FormacionPage from '../src/components/Formacion.vue'
import PostgradoPage from '../src/components/Postgrado.vue'
import IntegralPage from '../src/components/Integral.vue'
import RedPage from '../src/components/Red.vue'
import InvestPage from '../src/components/Investigacion.vue'
import NoticiasPage from '../src/components/Noticias.vue'

// Importa el componente Navbar
import NavBar from "../src/components/Navbar"

// Crea el router y especifica tus rutas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InicioPage },
    { path: '/formacion', component: FormacionPage },
    { path: '/postgrado', component: PostgradoPage },
    { path: '/integral', component: IntegralPage },
    { path: '/red', component: RedPage },
    { path: '/investigacion', component: InvestPage },
    { path: '/noticias', component: NoticiasPage },
  ]
})

// Crea la aplicación
const app = createApp(App)

// Usa el router y el componente Navbar
app.use(router)
app.use(NavBar)

// Monta la aplicación
app.mount('#app')
