import { put, call, takeEvery } from 'redux-saga/effects'

import { getHotels } from '../axios'
import { getHotelError, getHotelSuccess } from './slices/hotelSlice'

function* workFetchHotels(action) {
    console.log(action)
    try {
        const response = yield call(() => getHotels(action.payload))
        if(response.data.length === 0) {
            yield put(getHotelError('Локация не найдена'))
        } else {
            yield put(getHotelSuccess(response.data))
        }
    } catch (error) {
        yield put(getHotelError('Локация не найдена'))
    }
}

function* apiSaga() {
    yield takeEvery('hotel/getHotelsFetch', workFetchHotels)
}

export default apiSaga