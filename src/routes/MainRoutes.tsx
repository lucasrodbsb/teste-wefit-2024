import React from 'react'
import { Routes, Route } from 'react-router'
import Cart from '../pages/Cart'
import Home from '../pages/Home'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default MainRoutes