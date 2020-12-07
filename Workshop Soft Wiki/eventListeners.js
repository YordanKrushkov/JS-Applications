import authService from './serveces/authService.js'
import router from './router.js'
export const onLoginSumbit= (e) =>{
    e.preventDefault();

let formData= new FormData(e.target);
let email= formData.get('email');
let password= formData.get('password')

    if(email!='' && password!=''){
      authService.login(email, password)
        .then((data) =>{
           router('/')
        })
    }
}