import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRouter() {
    const {isAuth} = useAuthContext();
  return isAuth? <Outlet/> : <Navigate to='/login' />
}
