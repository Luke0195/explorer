import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import ProtectedRoute from './privateRoute'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

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



    </Switch>
  )
}

export default Routes
