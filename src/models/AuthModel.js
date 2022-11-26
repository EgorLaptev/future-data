import BaseModel from "@/models/BaseModel";
import router from "@/router";
import store from "@/store";

class AuthModel {
    static async login(credentials) {
        const data = await BaseModel.request('auth/login', { body: credentials })
        if (data.token) this._auth(data.token)
        return data;
    }
    static async register(credentials) {
        const data = await BaseModel.request('auth/signup', { body: credentials })
        if (data.token) this._auth(data.token)
        return data;
    }
    static logout() {
        localStorage.removeItem('token')
        router.push({ name: 'home' })
        store.commit('updateToken', null)
    }
    static _auth(token) {
        router.push({ name: 'home' })
        localStorage.setItem('token', token)
        store.commit('updateToken', token)
    }
}

export default AuthModel;