function attachEvents() {
    let url = `https://blog-apps-c12bf.firebaseio.com/posts/.json`;
    let selectMenuElement = document.getElementById('posts');
    let element;

    document.getElementById('btnLoadPosts').addEventListener('click', () => {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let result = Object.keys(data).map(key => `<option value="${key}">${data[key].title}</option>`).join('');
                selectMenuElement.innerHTML = result;
                element = Object.keys(data)[0];
            });
    });
    selectMenuElement.addEventListener('change', (e) => {
        element = e.currentTarget.value;
      
    });

    document.getElementById('btnViewPost').addEventListener('click', (e) => {
        let currentUrl = `https://blog-apps-c12bf.firebaseio.com/posts/${element}.json`;
        fetch(currentUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('post-title').innerHTML = `${data.title}`
                document.getElementById('post-body').innerHTML = `<p>${data.body}</p>`;


                let idPost = data.id;
                fetch('https://blog-apps-c12bf.firebaseio.com/comments/.json')
                    .then(result => result.json())
                    .then(comments => {


                        for (let key in comments) {
                            if (idPost == comments[key].postId) {
                                document.getElementById('post-comments').innerHTML = `<li>${comments[key].text}</li>`;
                            }
                        }

                    });
            });
    });




}

attachEvents();