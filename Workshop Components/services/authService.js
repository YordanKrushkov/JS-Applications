const apiKey = 'AIzaSyB3EY15nTTHvWkpxwU8a4xhuui86ioqKKk';

const api = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
};


import { request } from './requestService.js';

export const register = async (email, password) => {

    let res = await request(api.register, 'POST', {
        email,
        password
    });
    // localStorage.setItem('auth', JSON.stringify(res));

    return res;
};

export const login = async (email, password) => {
    let response = await fetch(api.login, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    let data = await response.json();

    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const getUserData = () => {

    try {
        let data = JSON.parse(localStorage.getItem('user'));
        return {
            'isAuthenticated': Boolean(data.idToken),
            email: data.email || '',
        };
    }
    catch (error) {
        return {
            'isAuthenticated': false,
            email: '',
        }
    }
};

export const logout = () => {
    localStorage.setItem('user', {});
};