import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from '../SignupPage/SignupPage'
import SigninPage from '../SigninPage/SigninPage'

export default function AuthPage() {
  return (
    <div>
        <Routes>
            <Route path='/signin' element={ <SigninPage />}/>
            <Route path='/signup' element={ <SignupPage />}/>
            <Route path='/signup/oauth'/>
        </Routes>
    </div>
  )
}
