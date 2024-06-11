import React, { memo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getStorage } from '../../lib'

const Auth = () => {
    let isLogin = getStorage("x-auth-token")
    return isLogin ? <Outlet /> : <Navigate replace to="/login" />
}

export default memo(Auth)