import React, {useState, useEffect} from 'react'

import { useSelector } from 'react-redux/es/exports'

import { HotelCard } from '../HotelCard/HotelCard'
import { Paper } from '../Paper/Paper'
import { Select } from '../Select/Select'

import styles from './Favourites.module.css'

export const Favourites = () => {

  const favoriteHotels = useSelector(store => store.hotels.favoriteHotels)

  return (
    <Paper paddingRight={20}>
        <div className={styles.container}>
            <p className={styles.title}>Избранное</p>
            <div className={styles.wrapper}>
                <Select value='Рейтинг' sortBy='stars'/>
                <Select value='Цена' sortBy='priceAvg'/>
            </div>
            <div className={styles.list}>
              {favoriteHotels.length === 0
                ? <p>Здесь пока пусто</p>
                : favoriteHotels.map(hotel => (
                    <div key={hotel.hotelId}>
                      <HotelCard
                         hotelId={hotel.hotelId}
                         hotelName={hotel.hotelName}
                         priceAvg={hotel.priceAvg}
                         stars={hotel.stars}
                         checkIn={hotel.checkIn}
                         daysNumber={hotel.daysNumber}
                         favorite={true}
                      />
                      <div className={styles.divider}></div>
                    </div>
                  ))
              }
            </div>
        </div>
    </Paper>
  )
}
