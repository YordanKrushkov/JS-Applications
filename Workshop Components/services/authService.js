const apiKey = 'AIzaSyB3EY15nTTHvWkpxwU8a4xhuui86ioqKKk';
const databaseURL = 'https://movies-93a2e.firebaseio.com';
const registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`


import { request } from './requestService.js';

export const register = async (email, password) => {

    let res = await request(registerURL, 'POST', {
        email,
        password
    });
    localStorage.setItem('auth', JSON.stringify(res));

    return res;
};