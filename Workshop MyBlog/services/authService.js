import request from './requester.js'

const apiKey='AIzaSyDH4RUhtZkhAADkXip1dSqlA1Zs87F0qRI';

const endpoints={
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
}

export default {
    async register(email,password){
        let data= await request.post(endpoints.register, {
            email,
            password
        })
        return data;
    },
    
    async login(email,password){
        let data=await request.post(endpoints.login,{
            email,
            password
        })
        localStorage.setItem('user',JSON.stringify(data));
        return data;
    },

     getData(){
       try{
            let data=JSON.parse(localStorage.getItem('user'));
           return {
            isAuthenticated: Boolean(data.idToken),
            email:data.email
           };
         }catch(error){
           return{
            'isAuthenticated': false,
            email:''
           } 
        }
    },

  async logout(){
        localStorage.setItem('user', '')
    }
}