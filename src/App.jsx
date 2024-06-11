import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Like from './pages/likes'
import Shop from './pages/shop'
import Auth from './pages/auth'
import Login from './pages/auth/login'
import Admin from './pages/admin'
import Create from './pages/admin/create'
import Manage from './pages/admin/manage'
import NotFound from './pages/not-found'
// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='like' element={<Like />} />
          <Route path='shop' element={<Shop />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='/' element={<Auth />} >
          <Route path='admin/' element={<Admin />} >
            <Route path='create' element={<Create />} />
            <Route path='manage' element={<Manage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  )
}

export default memo(App)