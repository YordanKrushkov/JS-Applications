import {Router} from 'https://unpkg.com/@vaadin/router';

let rootElement= document.getElementById('root');
let router = new Router(rootElement);
import Home from './components/home.js'
import Register from './components/register.js'
import Login from './components/login.js'

customElements.define('home-component', Home);
customElements.define('register-component', Register);
customElements.define('login-component', Login)
router.setRoutes([
    {
        path:"/",
        component:'home-component'
    },
    {
        path:"/register",
        component: 'register-component'
    },
    {
        path: "/login",
        component: 'login-component'
    }
])