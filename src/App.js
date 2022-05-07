import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Product from './Components/Product'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':id' element={<Product />} />
      </Routes>
    </>
  )
}
