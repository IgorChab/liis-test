import { createSlice, current } from "@reduxjs/toolkit";

import { getFormatDateForCard } from '../../functions'

const initialState = {
    hotelData: [],
    isLoading: false,
    error: '',
    favoriteHotels: [],
    copyFavoriteHotels: [],
    location: 'Moscow',
    checkIn: '',
    daysNumber: 1
}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState: initialState,
    reducers: {
        getHotelsFetch: (state, action) => {
            state.isLoading = true
            state.location = action.payload.location
            state.checkIn = getFormatDateForCard(action.payload.checkIn)
            state.daysNumber = action.payload.daysNumber
            state.error = ''
        },
        getHotelSuccess: (state, action) => {
            state.hotelData = action.payload
            state.isLoading = false
            state.error = ''
        },
        getHotelError: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        addHotelToFavorite: (state, action) => {
            state.favoriteHotels.push(action.payload)
            let index = state.hotelData.findIndex(hotel => hotel.hotelId === action.payload.hotelId)
            state.hotelData[index] = {
                ...state.hotelData[index],
                favorite: true
            }
            state.copyFavoriteHotels = state.favoriteHotels
        },
        removeHotelFromFavorite: (state, action) => {
            let index = state.hotelData.findIndex(hotel => hotel.hotelId === action.payload.hotelId)
            state.hotelData[index] = {
                ...state.hotelData[index],
                favorite: false
            }
            state.favoriteHotels = state.favoriteHotels.filter(hotel => hotel.hotelId !== action.payload.hotelId)
        },
        sortFavoriteHotels: (state, action) => {
            state.favoriteHotels = action.payload
        },
        resetState: () => initialState
    }
})

export const { 
    getHotelError, 
    getHotelSuccess,
    getHotelsFetch, 
    addHotelToFavorite, 
    removeHotelFromFavorite,
    sortFavoriteHotels,
    resetState
} = hotelSlice.actions

export default hotelSlice.reducer