import React from 'react'

import { useSelector } from 'react-redux/es/exports'

import { Header } from '../../components/Header/Header'
import { Paper } from '../../components/Paper/Paper'
import { FindHotelForm } from '../../components/FindHotelForm/FindHotelForm'
import { Favourites } from '../../components/Favourites/Favourites'
import { ExpandedHotelCard } from '../../components/ExpandedHotelCard/ExpandedHotelCard'
import { Slider } from '../../components/Slider/Slider'

import { sklonenie } from '../../functions'

import arrow from '../../assets/arrow.svg'

import styles from './Dashboard.module.css'

export const Dashboard = () => {

  const hotels = useSelector(store => store.hotels.hotelData)
  const location = useSelector(store => store.hotels.location)
  const checkIn = useSelector(store => store.hotels.checkIn)
  const daysNumber = useSelector(store => store.hotels.daysNumber)
  const favoriteHotels = useSelector(store => store.hotels.favoriteHotels)
  const isLoading = useSelector(store => store.hotels.isLoading)

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.aside}>
          <FindHotelForm />
          <Favourites />
        </div>
        <Paper width='664px'>
          <div className={styles.header}>
            <div className={styles.wrapper}>
              <p>Отели</p>
              <img src={arrow} alt="arrow" />
              <p>{hotels[0]? hotels[0].location.name : location}</p>
            </div>
            <p className={styles.checkInDate}>{checkIn}</p>
          </div>
          <div className={styles.slider}>
            <Slider/>
          </div>
          <div className={styles.favouritesInfo}>
            <p>Добавлено в избранное:</p>
            <p><span>{favoriteHotels.length}</span> {sklonenie(favoriteHotels.length, ['отель', 'отеля', 'отелей'])}</p>
          </div>
          {isLoading && <p>Loading...</p>}
          <div className={styles.list}>
            {hotels && hotels.map(hotel => (
              <div key={hotel.hotelId}>
                <ExpandedHotelCard 
                  hotelId={hotel.hotelId}
                  hotelName={hotel.hotelName}
                  priceAvg={hotel.priceAvg}
                  stars={hotel.stars}
                  checkIn={checkIn}
                  daysNumber={daysNumber}
                  favorite={hotel.favorite}
                />
                <div className={styles.divider}></div>
              </div>
            ))}
          </div>
        </Paper>
      </div>
    </>
  )
}
