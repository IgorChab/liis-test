import React from 'react'

import styles from './Input.module.css'

export const Input = ({type, label, value, defaultValue, min, error, onChange, name, onBlur}) => {

  const handleChange = (e) => {
    onChange && onChange(e)
  }

  const handleBlur = (e) => {
    onBlur && onBlur(e)
  }

  return (
    <div className={`${styles.container} ${error && styles.errColor}`}>
        <div className={styles.label}>{label}</div>
        <input
          type={type} 
          value={value} 
          defaultValue={defaultValue} 
          name={name} 
          onChange={handleChange} 
          onBlur={handleBlur}
          autoComplete='off'
          min={min}
        />
        <p className={styles.err}>{error}</p>
    </div>
  )
}
