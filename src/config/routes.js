import Home from '../views/Home.vue'
import Pets from '../views/Pets.vue'
import Favorites from "../views/Favorites.vue";

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
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites
    }
]

export default routes