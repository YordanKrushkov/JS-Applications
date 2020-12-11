import { html, render } from 'https://unpkg.com/lit-html?module';


export default ({
    eventHandler,
    isAuthenticated,
    email
}) => html` 
<header id="header" @click="${eventHandler}">
    <h1>MyBlog</h1> 
    ${isAuthenticated
    ?html `<h2>Welcome <span>${email}!</span>!</h2>`
    : html``
    }     
    
    <nav id="nav">
        <ul> 
            ${isAuthenticated
            ? html`<li><a href="/logout">Logout</a></li>`
            :html`<li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>`
            }
        </ul>
    </nav>
</header>`