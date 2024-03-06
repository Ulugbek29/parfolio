import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header/Header'

export default function MainLayout() {
  return (
    <div>
        <Header />

        <div className='pt-[70px] min-h-screen '>
            <Outlet />
        </div>

    </div>
  )
}
