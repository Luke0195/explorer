import React from 'react'
import { Route, Routes as Switch, Navigate } from 'react-router-dom'
import ProtectedRoute from './privateRoute'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Error404 from '../pages/Error404'

const Routes = () => {
  return (
    <Switch>
      <Route index element={<SignIn />} />
      <Route
        path='dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
       <Route
        path='profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/explorer/error404" element={<Error404/>}/>
      <Route path="*" element={<Navigate replace to="/explorer/error404"/>}/>

    </Switch>
  )
}

export default Routes
