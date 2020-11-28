function loadRepos() {

	let reposElement = document.getElementById('repos');
	const httpRequest = new XMLHttpRequest();
	let inputElement = document.getElementById('username');
	const url = `https://api.github.com/users/${inputElement.value}/repos`;
	httpRequest.addEventListener('loadend', function () {


		if (this.status == 404) {
			reposElement.innerHTML = `<li>Not Found</li>`
		} else {
			let request = JSON.parse(this.responseText);
			reposElement.innerHTML = request.map(x => `<li><a href="${x.html_url}" target="_blank"> ${x.name}</a></li>`)
		}

	})
	inputElement.value = '';
	httpRequest.open('GET', url);
	httpRequest.send();
}