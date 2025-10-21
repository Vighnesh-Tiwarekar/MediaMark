import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/Home'
import ProtectedRoutes from './ProtectedRoutes'

const Router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        element: <ProtectedRoutes></ProtectedRoutes>,
        children: [
            {
                path: '/',
                element: <RootLayout></RootLayout>,
                children: [
                    {
                        index: true,
                        element: <Home></Home>
                    }
                ]
            }
        ]
    }
])

export default Router;