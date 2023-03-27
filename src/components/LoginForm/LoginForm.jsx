import { Formik } from 'formik'
import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux/es/exports'
import { login } from '../../redux/slices/authSlice'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Paper } from '../Paper/Paper'

import styles from './LoginForm.module.css'

export const LoginForm = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Обязательное поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Некорректный логин';
        }

        if (!values.password) {
          errors.password = 'Обязательное поле';
        } else if (!/[a-zA-Z0-9!@#$%^&*]{8}$/.test(values.password)) {
          errors.password = 'Без кириллицы, минимум 8 символов'
        }
        return errors;
      }}
      onSubmit={() => {
        dispatch(login())
        navigate('/dashboard')
        localStorage.setItem('isAuth', true)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Paper width='409px'>
          <form className={styles.container} onSubmit={handleSubmit}>
            <p className={styles.title}>Simple Hotel Check</p>
            <div className={styles.wrapper}>
              <Input
                type='text'
                label='Логин'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
              />
              <Input
                type='password'
                label='Пароль'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password && errors.password}
              />
            </div>
            <Button value='Войти' width='100%' height='50px' type='submit'/>
          </form>
        </Paper>
      )}
    </Formik>
  )
}
