import { html, render } from 'https://unpkg.com/lit-html?module';

export default ({
  onRegister
}) => html`
    <section id="register">
      <div class="color">
        <div class="register-form">
          <h1>Register</h1>
          <form action="/register" id="form" @submit=${onRegister}>
            <label for="email">Email</label>
            <input type="text" name="email">
            <label for="password">Password</label>
            <input type="password" name="password">
            <label for="repeat-password">Repeat Password</label>
            <input type="password" name="repeatPassword">
            <button>Submit</button>
            <a href="/login" class="option">Already have an account?</a>
          </form>
        </div>
      </div>
    </section>
`