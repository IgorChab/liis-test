import React, {useEffect, useRef} from 'react'

import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getHotelsFetch } from '../../redux/slices/hotelSlice'

import { Input } from '../Input/Input'
import { Paper } from '../Paper/Paper'
import { Button } from '../Button/Button'
import { Formik } from 'formik'

import { getFormatedDateForApi } from '../../functions'

import styles from './FindHotelForm.module.css'

export const FindHotelForm = () => {

  const dispatch = useDispatch()

  const error = useSelector(state => state.hotels.error)

  const formikRef = useRef()

  useEffect(() => {
    formikRef.current.handleSubmit()
  }, [])

  useEffect(() => {
    if(error) {
      formikRef.current.setFieldError('location', error)
    }
  }, [error, formikRef.current?.values?.location])

  return (
    <Formik
      innerRef={formikRef}
      validateOnBlur={false}
      initialValues={{location: 'Moscow', checkIn: getFormatedDateForApi(new Date()), daysNumber: 1}}
      validate={values => {
        const errors = {}
        if(!values.location.trim()) errors.location = 'Обязательное поле'
        if(!values.checkIn) errors.checkIn = 'Обязательное поле'
        if(!values.daysNumber) errors.daysNumber = 'Обязательное поле'
        return errors
      }}
      onSubmit={(values) => {
        const time = new Date(values.checkIn)
        const checkOut = time.setDate(time.getDate() + values.daysNumber)
        const data = {...values, checkOut: getFormatedDateForApi(new Date(checkOut))}
        dispatch(getHotelsFetch(data))
      }}
    >
      {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Paper width='100%'>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <Input 
                      type='text' 
                      label='Локация' 
                      defaultValue='Москва'
                      name='location'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.location && touched.location && errors.location}
                    />
                    <Input 
                      type='date' 
                      label='Дата заселения' 
                      name='checkIn' 
                      defaultValue={getFormatedDateForApi(new Date())}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.checkIn && touched.checkIn && errors.checkIn}
                    />
                    <Input 
                      type='number' 
                      label='Количество дней' 
                      name='daysNumber' 
                      defaultValue={1} 
                      min={1}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.daysNumber && touched.daysNumber && errors.daysNumber}
                    />
                </div>
                <Button value='Найти' width='100%' height='50px' type='submit'/>
            </form>
        </Paper>
      )}
    </Formik>
  )
}
