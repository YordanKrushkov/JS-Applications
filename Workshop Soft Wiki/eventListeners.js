import authService from './serveces/authService.js'
import articleService from './serveces/articleService.js'
import router from './router.js'
export const onLoginSumbit= (e) =>{
    e.preventDefault();

let formData= new FormData(e.target);
let email= formData.get('email');
let password= formData.get('password')

    if(email!='' && password!=''){
      authService.login(email, password)
        .then((data) =>{
           router('/');
        })
    }
}

export const onArticleCreateSumbit=(e)=>{
    e.preventDefault();

    let formData= new FormData(e.target);
    let title= formData.get('title');
    let category= formData.get('category');
    let content= formData.get('content');

    if(title!='' && category!='' && content!=''){
        articleService.createArticle({
            title,
            category,
            content,
        })
        .then((data)=>{
            console.log(data);
        router('/');
        })
    }

}