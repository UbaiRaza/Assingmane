import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Products } from '../components/Products'
import { Products_Details } from '../components/Products_Details'

export const Router_App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Products_Details />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
