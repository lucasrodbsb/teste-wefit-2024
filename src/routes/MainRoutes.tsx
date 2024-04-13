import React from 'react'
import { Routes, Route } from 'react-router'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import PurchaseConclusion from '../pages/PurchaseConclusion'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/purchase-conclusion' element={<PurchaseConclusion />} />
    </Routes>
  )
}

export default MainRoutes