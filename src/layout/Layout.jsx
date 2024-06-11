import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Header />
            <main className='max-w-[1480px] w-[100%] mx-auto'> <Outlet /> </main>
        </div>
    )
}

export default memo(Layout)