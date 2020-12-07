import request from './request.js';

const apiKey = 'AIzaSyBps1KzRAYY-axam0AwRP0eL8VhsNggU_k';
let endPoints={
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
}
export default {
    async login(email, password) {

        let response = await request.post(endPoints.login, {
                email,
                password
            }
        );
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    },
    async register(email, password) {

        let response = await request.post(endPoints.register, {
                email,
                password
            }
        );
    },
    getAuthData() {

        try {
            let data = JSON.parse(localStorage.getItem('user'));
            return {
                'isAuthenticated': Boolean(data.idToken),
                email: data.email || '',
                idToken: data.idToken
            };
        }
        catch (error) {
            return {
                'isAuthenticated': false,
                email: '',
            }
        }
    },
    logout() {
        localStorage.setItem('user', '');
    },
}