
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../page/AuthPage/AuthPage'
import HomePage from '../page/HomePage/HomePage'

export default function AuthRoute() {



  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthPage /> } />
        <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}
