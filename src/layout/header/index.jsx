import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/react.svg'
import { getStorage } from '../../lib'

const Header = () => {
    const token = getStorage('x-auth-token')

    return (
        <header className='py-4 mb-8 text-black bg-white shadow-md'>
            <nav className='max-w-[1480px] w-[100%] mx-auto flex items-center justify-between'>
                <Link to={`/`} className='text-2xl font-bold flex items-center gap-2'> <img src={logo} /> React Zustand </Link>
                <ul className='text-xl font-semibold text-blue-700 flex items-center justify-center gap-8'>
                    <Link to={`/products`} > Products </Link>
                    <Link to={`/users`} > Users </Link>
                    <Link to={`/like`} > Like </Link>
                    <Link to={`/shop`} > Cart </Link>
                </ul>
                <div className="flex items-center justify-center gap-4">
                    <Link to={`/${token ? 'admin/create' : 'login'}`}
                        className='w-24 text-center px-4 py-1 text-xl font-semibold rounded-lg text-white bg-blue-600 border-2 border-blue-500'>
                        {token ? 'Admin' : 'Login'}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)