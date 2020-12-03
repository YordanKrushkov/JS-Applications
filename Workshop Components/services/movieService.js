const databaseURL = 'https://movies-93a2e.firebaseio.com';
import { request } from './requestService.js';

export const getAllMovies= async (searchText)=>{

   let res = await request(`${databaseURL}/movies.json`, 'GET');
    return Object.keys(res).map(key => ({ key, ...res[key] })).filter(x => !searchText || searchText == x.title);
};