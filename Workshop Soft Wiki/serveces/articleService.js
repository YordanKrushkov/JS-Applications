import request from './request.js';
import authService from './authService.js';

const baseUrl='https://wikiproject-26a1b-default-rtdb.firebaseio.com';

const urlBuilder=(resource)=> {
    return `${baseUrl}/${resource}.json?auth=${authService.getAuthData().idToken}`
}
export default  {

    async createArticle(articleData) {
        let res = await request.post(urlBuilder('articles'), articleData);
        return res;
    },

    async getAll(searchText) {

        let res = await request(`${baseUrl}/articles.json`, 'GET');
        return Object.keys(res).map(key => ({ key, ...res[key] })).filter(x => !searchText || searchText == x.title);
    },
    async getOne(id) {

        let res = await request(`${baseUrl}/articles/${id}.json`, 'GET');
        let { email } = authService.getAuthData();
        let likes = Object.values(res.likes || {});
        let alreadyLiked = likes.some(x => x.creator == email);
        return Object.assign(res, { isOwn: res.creator == email, alreadyLiked, likes: likes.length });
    },
    async deleteArticle(id) {

        let res = await request(`${baseUrl}/articles/${id}.json`, 'DELETE');
        return res;
    },
    async editArticle(id, articleData) {

        let res = await request(`${baseUrl}/articles/${id}.json`, "PATCH", articleData);
        return res;
    },
    async likeMovie(id, creator) {

        let res = await request(`${baseUrl}/articles/${id}/likes.json`, "POST", { creator });
        return res;
    }
};