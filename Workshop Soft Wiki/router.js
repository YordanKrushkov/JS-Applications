import { html, render } from './node_modules/lit-html/lit-html.js';

import authService from './serveces/authService.js';
import layot from './views/layout.js';
import home from './views/home.js';
import login from './views/login.js'
import register from './views/register.js';
import notFound from './views/not-found.js';
import createArticle from './views/create.js';

import {onLoginSumbit, onArticleCreateSumbit} from './eventListeners.js'

const routes = [
    {
        path: '/',
        template: (props)=>{
            let template= home;
            let url='/'

        if(!props.isAuthenticated){
            template=login;
            url='/login';
        }
        history.pushState({},'', url);
        return template(props);
        }
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
    },
    {
        path: '/logout',
        template:(props)=>{
            authService.logout();
        history.pushState({},'', '/');

            return login(props);
        }
       
    },
    {
        path: '/create',
        template:createArticle,
        context:{
            onArticleCreateSumbit
        }
    }
];

const router = (path) => {
    history.pushState({},'',path)
    let rout = routes.find(x => x.path === path) || routes.find(x => x.path === '/not-found');
    let context=rout.context;
    let userData=authService.getAuthData();
    render(layot(rout.template, { navigationHandler, onLoginSumbit,...userData,...context }), document.getElementById('app'));

};

function navigationHandler(e) {
    e.preventDefault();

    if (e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
};

export default router;