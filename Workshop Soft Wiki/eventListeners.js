import authService from './serveces/authService.js'

export const onLoginSumbit= (e) =>{
    e.preventDefault();

let formData= new FormData(e.target);
let email= formData.get('email');
let password= formData.get('password')

    if(email!='' && password!=''){
      authService.login(email, password)
        .then((data) =>{
            console.log(data);
        })
    }
}