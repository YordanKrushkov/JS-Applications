function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   let contentElement = document.getElementById('res');
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {

         contentElement.innerHTML = this.responseText;
      }
   })
   httpRequest.open('GET', url);
   httpRequest.send();
}