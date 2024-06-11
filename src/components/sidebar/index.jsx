import React, { memo } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaPen } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { removeStorage } from '../../lib'


const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        removeStorage('x-auth-token')
        navigate("/")
    }

    return (
        <div className={`sidebar w-[300px] h-screen sticky top-0 left-0 overflow-hidden bg-gray-700 text-white`}>
            <div className="w-full h-screen flex flex-col items-center justify-between">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <Link to={'/'} className='w-[100%] h-[74px] mx-auto flex items-center justify-center gap-4 shadow-sm shadow-gray-100'>
                        <span className='text-2xl'>Dashboard</span>
                    </Link>
                    <div className="w-full flex flex-col gap-1">
                        <NavLink to={"create"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Products</span>
                        </NavLink>
                        <NavLink to={"manage"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><AiFillProduct fontSize={22} /></span>
                            <span>Manage</span>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full px-4 mb-4 flex items-center font-bold justify-between">
                    <button onClick={() => navigate("/")} className='btn-outline w-[120px] py-1 bg-white text-black rounded-md text-md'>
                        Go Home
                    </button>
                    <button onClick={handleLogOut} className='btn-outline w-[120px] py-1 bg-white text-black rounded-md text-md'>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(Sidebar)