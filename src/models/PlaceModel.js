import BaseModel from "@/models/BaseModel";
import store from "@/store";

class PlaceModel {
    static async search(q) {
        return await BaseModel.request('map/suggest?' + new URLSearchParams({ q, loc: store.state.city }))
    }
    static async getByName(q) {
        return await BaseModel.request('map/location?' + new URLSearchParams({ q, loc: store.state.city }))
    }
    static async getById(id) {
        return await BaseModel.request(`event/place?id=${id}`)
    }
    static async wiki(query) {
        return await BaseModel.request(`wiki/get?query=${query}`)
    }
}

export  default PlaceModel