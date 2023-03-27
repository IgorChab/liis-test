import axios from "axios";

const api = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/cache.json?',
    params: {
        token: '5d052c962c923fc138dcf539750b0ff4',
        limit: 15,
        currency: 'rub'
    }
})

export const getHotels = async ({location, checkIn, checkOut}) => {
    return await api.get('', {params: {
        location,
        checkIn,
        checkOut
    }})
}
