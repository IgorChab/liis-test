import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import { useSelector } from 'react-redux/es/exports'

import {LoginPage} from './pages/LoginPage/LoginPage'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {

  const isAuth = useSelector(store => store.auth.isAuth)

  return (
    <BrowserRouter>
      <Routes>
          {isAuth
            ?
              <>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
              </>
            :
              <>
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='*' element={<Navigate to={'/login'}/>}/>
              </>
          }
      </Routes>
    </BrowserRouter>
  )
}

export default App
