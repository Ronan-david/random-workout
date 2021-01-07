
import Home from '../pages/Home'
import settings from '../components/random/settings'
import exericesHolder from '../components/random/exericesHolder'

export const routes = [
  { path: '/', component: Home },
  { path: '/settings', name:'settings', component: settings },
  { path: '/exercices', name:'exercices', component: exericesHolder }
]