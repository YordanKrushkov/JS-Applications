import { html, render } from 'https://unpkg.com/lit-html?module';
import header from './header.js';


export default(template,props)=>html`
${header(props)}
${template}
`