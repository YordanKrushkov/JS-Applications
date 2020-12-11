import { html, render } from 'https://unpkg.com/lit-html?module';

export default ({
  onLogin
}) => html`
<section id="login" >
  <div class="color">
    <div class="login-form">
      <h1>Login</h1>
      <form action="/login"  id="form" @submit=${onLogin}>
        <label for="email">Email</label>
        <input type="text" name="email">
        <label for="password">Password</label>
        <input type="password" name="password">
        <button>Submit</button>
        <a href="/register" class="option">Don't have an account?</a>
      </form>
    </div>
  </div>
</section>
`;