import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { IncidenciaPage } from '../pages/IncidenciaPage'

export const IncidenciaRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <IncidenciaPage />} /> 

        <Route path='/*' element={ <Navigate to="/" />} />        
    </Routes>
  )
}
