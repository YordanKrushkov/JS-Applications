import { html, render } from 'https://unpkg.com/lit-html?module';
export default ({
  eventHandler,
  isAuthenticated
}) => html`
 ${isAuthenticated
?html`  <section id="home-logged">
      <section class="first-section">
        <section class="background-container">
          <form action="/create-post" method="POST">
            <h1>Create Post</h1>
            <label for="title">Title</label>
            <input type="text" name="title">
            <label for="category">Category</label>
            <input type="text" name="category">
            <label for="content">Content</label>
            <textarea name="content" cols="30" rows="7"></textarea>
            <button>Submit</button>
          </form>
        </section>
      </section>
      <section class="second-section">
        <h3>Articles</h3>
        <hr>
        <div class="posts-row">
        </div>
      </section>
    </section>`

  :html`
  <section id="home">
      <section class="background-container" @click=${eventHandler}>
        <h1>Welcome to MyBlog!</h1>
        <div class="auth-buttons">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </section>
    </section>
  `
}
 `;