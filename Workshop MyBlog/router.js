import { html, render } from 'https://unpkg.com/lit-html?module';

import { onLogin, onRegister } from './eventListeners.js';
import authService from './services/authService.js'

import homeTemplate from './components/home.js';
import loginTemplate from './components/login.js'
import registerTemplate from './components/register.js';
import layout from './components/layout.js';
import notFound from './components/notFound.js';
import postForm from './components/post.js';


const routes = [
    {
        path: '/',
        template: homeTemplate,
    },
    {
        path: '/login',
        template: loginTemplate,
        context: {
            onLogin
        }
    },
    {
        path: '/register',
        template: registerTemplate,
        context: {
            onRegister
        }
    },
    {
        path: '/not-found',
        template: notFound
    },
    {
        path: '/post',
        template: postForm
    },
    {
        path: '/logout',
        template: () => {
            authService.logout().then(data => {
                history.pushState({}, '', '/');
                router('/');
            })
        }

    },
];

const router = (path) => {
    history.pushState({}, '', path);

    let rout = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found');
    let context = rout.context;
    let userData = authService.getData();
    render(layout(rout.template, { eventHandler, ...userData, ...context }), document.getElementById('root'));
}

function eventHandler(e) {
    if (e.target.tagName == 'A') {
        e.preventDefault()
        let url = new URL(e.target.href);

        router(url.pathname)
    }

}

export default router;