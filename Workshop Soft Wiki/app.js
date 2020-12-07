import { html, render } from './node_modules/lit-html/lit-html.js';

import layot from './views/layout.js';
import home from './views/home.js';
import login from './views/login.js'
import register from './views/register.js';


const routes = [
    {
        path: '/',
        template: home
    },
    {
        path: '/login',
        template: login
    },
    {
        path: '/register',
        template: register
    },
];

const router = (path) => {

    let rout = routes.find(x => x.path === path);
    render(layot(rout.template(), { navigationHandler }), document.getElementById('app'));

};

function navigationHandler(e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        let url = new URL(e.target.href);
        router(url.pathname);
    }
};

router(location.pathname)

