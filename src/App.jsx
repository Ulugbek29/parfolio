import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import HomePage from "./components/Pages/HomePage"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path='home' element={<HomePage />}/>
            <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}
