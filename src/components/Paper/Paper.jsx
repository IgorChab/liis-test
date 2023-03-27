import React from 'react'

import styles from './Paper.module.css'

export const Paper = ({width, height, children, paddingRight}) => {
  return (
    <div className={styles.paper} style={{width: width, height: height, paddingRight: paddingRight}}>
        {children}
    </div>
  )
}
