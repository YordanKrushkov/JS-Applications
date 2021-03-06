import { Router } from 'https://unpkg.com/@vaadin/router';
import {logout} from './services/authService.js'

let rootElement = document.getElementById('root');
let router = new Router(rootElement);
import Home from './components/home.js'
import Register from './components/register.js'
import Login from './components/login.js'
import Movies from './components/movies.js'
import MoviesCard from './components/movieCard.js';
import MovieDetails from './components/movie-details.js'

customElements.define('movie-details', MovieDetails);
customElements.define('movie-template', Movies);
customElements.define('movie-card', MoviesCard)
customElements.define('home-component', Home);
customElements.define('register-component', Register);
customElements.define('login-component', Login)
router.setRoutes([
    {
        path: "/",
        component: 'home-component'
    },
    {
        path: "/register",
        component: 'register-component'
    },
    {
        path: "/details/:key",
        component: "movie-details"
    },
    {
        path: "/login",
        component: 'login-component'
    },
    {
        path: "/logout",
        action: (context, commands)=>{
            logout();
            return commands.redirect('/');
        }
    }
]);

