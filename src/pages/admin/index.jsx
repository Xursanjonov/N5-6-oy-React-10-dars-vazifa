import React, { Fragment, memo } from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {

    return (
        <Fragment>
            <div className={`max-w-[1920px] mx-auto flex justify-between`}>
                <Sidebar />
                <div className='w-[1620px] flex flex-col bg-white'>
                    <Outlet />
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Admin)