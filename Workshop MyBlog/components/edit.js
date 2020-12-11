import { html, render } from 'https://unpkg.com/lit-html?module';

export default () => html`
    <main id="home-logged">
      <section class="first-section">
        <section class="background-container">
          <form action="" method="" class="edit-form">
            <h1>Edit Post</h1>
            <label for="title">Title</label>
            <input type="text" name="title" value="Javascript">
            <label for="category">Category</label>
            <input type="text" name="category" value="Programming">
            <label for="content">Content</label>
            <textarea name="content" cols="30" rows="7">Javascript is the best language!</textarea>
            <button>Edit</button>
            <a href="" id="close-btn"><img src="../../images/close.png"></a>
          </form>
        </section>
      </section>
      <section class="second-section">
        <h3>Posts</h3>
        <hr>
        <div class="posts-row">
        </div>
      </section>
    </main>
`