import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserState } from '../../redux/selectors';

export const RequireAuth = () => {
  const user = useSelector(getUserState)
  const location = useLocation();

  return (
    user ? <Outlet context={user} /> : <Navigate to="auth/login" state={{ from: location }} /> 
  )

}
