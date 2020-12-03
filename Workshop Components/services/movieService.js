const databaseURL = 'https://movies-93a2e.firebaseio.com';
import { request } from './requestService.js';

export const getAllMovies= async (searchText)=>{

   let res = await request(`${databaseURL}/movies.json`, 'GET');
    return Object.keys(res).map(key => ({ key, ...res[key] })).filter(x => !searchText || searchText == x.title);
};

export const getOneMovie = async (id)=>{
    let res = await request(`${databaseURL}/movies/${id}.json`, 'GET');
    return res;
    // let { email } = authService.getAuthData();
    // let likes = Object.values(res.likes || {});
    // let alreadyLiked = likes.some(x => x.creator == email);
    // return Object.assign(res, { isOwn: res.creator == email, alreadyLiked, likes: likes.length });
}