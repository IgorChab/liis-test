import React from 'react'

import { Heart } from '../Heart/Heart'
import { Rating } from '../Rating/Rating'

import { useDispatch, useSelector } from 'react-redux/es/exports'

import { addHotelToFavorite, removeHotelFromFavorite } from '../../redux/slices/hotelSlice'

import { sklonenie } from '../../functions'

import styles from './HotelCard.module.css'

export const HotelCard = (props) => {

  const {hotelId, hotelName, checkIn, daysNumber, priceAvg, stars, favorite} = props

  const favoriteHotels = useSelector(state => state.hotels.favoriteHotels)

  const dispatch = useDispatch()

  const handleClick = () => {
    if(favoriteHotels.find(hotel => hotel.hotelId === hotelId)){
      dispatch(removeHotelFromFavorite(props))
    } else {
      dispatch(addHotelToFavorite(props))
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.name}>{hotelName}</p>
            <div onClick={handleClick} style={{cursor: 'pointer'}}>
              <Heart favorite={favorite}/>
            </div>
        </div>
        <div className={styles.date}>
            <p>{checkIn}</p>
            <div className={styles.divider}></div>
            <p>{daysNumber} {sklonenie(daysNumber, ['день', 'дня', 'дней'])}</p>
        </div>
        <div className={styles.flex}>
          <Rating rating={stars}/>
          <div className={styles.price}>
            <p>Price:</p>
            <p>{Number(priceAvg).toFixed()} ₽</p>
          </div>
        </div>
    </div>
  )
}
