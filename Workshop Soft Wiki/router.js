import { html, render } from './node_modules/lit-html/lit-html.js';

import layot from './views/layout.js';
import home from './views/home.js';
import login from './views/login.js'
import register from './views/register.js';
import notFound from './views/not-found.js';

import {onLoginSumbit} from './eventListeners.js'

const routes = [
    {
        path: '/',
        template: home
    },
    {
        path: '/login',
        template: login,
        context: {
            onLoginSumbit
        }
    },
    {
        path: '/register',
        template: register
    },
    {
        path: '/not-found',
        template: notFound
    }
];

const router = (path) => {
    history.pushState({},'',path)
    let rout = routes.find(x => x.path === path) || routes.find(x => x.path === '/not-found');
    let context=rout.context;
    render(layot(rout.template(context), { navigationHandler }), document.getElementById('app'));

};

function navigationHandler(e) {
    e.preventDefault();

    if (e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
};

export default router;