import React, { useState, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { sortFavoriteHotels } from '../../redux/slices/hotelSlice'

import selectIcon from '../../assets/select.svg'

import styles from './Select.module.css'

export const Select = ({ value, sortBy }) => {

    const [select, setSelect] = useState(false)

    const favoriteHotels = useSelector(state => state.hotels.favoriteHotels)
    const copyFavoriteHotels = useSelector(state => state.hotels.copyFavoriteHotels)

    const dispatch = useDispatch()

    const handleClick = () => {
        if(select === false) {
            dispatch(sortFavoriteHotels([...favoriteHotels].sort((a, b) => a[sortBy] - b[sortBy])))
            setSelect('asc')
        }
        if(select === 'asc') {
            dispatch(sortFavoriteHotels([...favoriteHotels].sort((a, b) => b[sortBy] - a[sortBy])))
            setSelect('dsc')
        }
        if(select === 'dsc') {
            dispatch(sortFavoriteHotels(copyFavoriteHotels))
            setSelect(false)
        }
    }

    const checkSelect = (value) => {
        if(value === false) return styles.notSelect
        if(value === 'asc') return styles.selectAsc
        if(value === 'dsc') return styles.selectDsc
    }

    return (
        <div className={`${styles.container} ${!select && styles.disable}`} onClick={handleClick}>
            <p>{value}</p>
            <div className={styles.wrapper}>
                <img src={selectIcon} alt="select" className={`${styles.firstSelect} ${select === 'asc'? checkSelect(select) : checkSelect(false)}`}/>
                <img src={selectIcon} alt="select" className={`${styles.lastSelect} ${select === 'dsc'? checkSelect(select) : checkSelect(false)}`}/>
            </div>
        </div>
    )
}
