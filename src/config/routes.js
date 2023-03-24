import Home from '../views/Home.vue'
import Pets from '../views/Pets.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pets',
        name: 'Pets',
        component: Pets
    }
]

export default routes