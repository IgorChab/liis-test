import React from 'react'
import styles from './Button.module.css'

export const Button = ({width, height, value, type}) => {
  return (
    <>
      {type
      ? 
        <button type='submit' className={styles.btn} style={{width: width, height: height}}>
          {value}
        </button>
      :
        <div className={styles.btn} style={{width: width, height: height}}>
          {value}
        </div>
      }
    </>
  )
}
