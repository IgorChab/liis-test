import React from 'react'

import house from '../../assets/house.svg'

import { HotelCard } from '../HotelCard/HotelCard'

import styles from './ExpandedHotelCard.module.css'

export const ExpandedHotelCard = ({hotelId, hotelName, checkIn, daysNumber, priceAvg, stars, favorite}) => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <img src={house} alt='house'/>
        </div>
        <HotelCard 
           hotelId={hotelId}
           hotelName={hotelName}
           priceAvg={priceAvg}
           stars={stars}
           checkIn={checkIn}
           daysNumber={daysNumber}
           favorite={favorite}
        />
    </div>
  )
}
