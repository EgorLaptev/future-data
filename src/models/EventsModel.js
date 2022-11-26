import BaseModel from "@/models/BaseModel";
import store from "@/store";

class EventsModel {
    static async day() {
        return await BaseModel.request('event/day?' + new URLSearchParams({ loc: 'spb' }));
    }
    static async search(q) {
        return await BaseModel.request('event/search?' + new URLSearchParams({
            q, loc: store.state.city, lang: 'ru'
        }))
    }
    static async getEvent(id) {
        return await BaseModel.request(`event?id=${id}`)
    }
}

export default EventsModel