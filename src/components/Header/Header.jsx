import React from 'react'

import { useDispatch } from 'react-redux/es/exports'

import { logout } from '../../redux/slices/authSlice'
import { resetState } from '../../redux/slices/hotelSlice'

import logoutImg from '../../assets/logout.png'

import styles from './Header.module.css'

export const Header = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
    dispatch(resetState())
  }

  return (
    <div className={styles.header}>
        <p className={styles.logo}>Simple Hotel Check</p>
        <div className={styles.wrapper} onClick={handleClick}>
            <p>Выйти</p>
            <img src={logoutImg} alt="logoutImg" />
        </div>
    </div>
  )
}
