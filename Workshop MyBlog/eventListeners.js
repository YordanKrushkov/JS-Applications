import authService from './services/authService.js'

export const onLogin=(e)=>{
    e.preventDefault();

    let formData = new FormData(form);
    let email= formData.get('email');
    let password=formData.get('password')
    authService.login(email,password)
    .then(data=>{
        console.log(data.email);
    })
}

export const onRegister=(e)=>{
    e.preventDefault();

    let formData = new FormData(form);
    let email= formData.get('email');
    let password=formData.get('password')
    let repeatPassword=formData.get('repeatPassword');

    if(password==repeatPassword){
       authService.register(email,password)
    }
}