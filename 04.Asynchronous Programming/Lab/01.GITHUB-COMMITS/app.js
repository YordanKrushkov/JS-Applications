function loadCommits() {
   let username=document.getElementById('username').value;
   let repo=document.getElementById('repo').value;
   let commitsList=document.getElementById('commits');

   fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response=>response.json())
        .then(data=>{
                let comits=data.map(x=> `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');
                commitsList.innerHTML=comits;
            
        })
        .catch(err=>{
            commitsList.innerHTML=`<li>${err.status}</li>`;
        })
}

