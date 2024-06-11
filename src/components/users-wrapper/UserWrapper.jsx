import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr'
import UserItem from './UserItem'

const UserWrapper = ({ title, users, link, admin }) => {
    const navigate = useNavigate()

    return users ? (
        <div className='mb-5 flex flex-col gap-5'>
            <div className="mx-7 mb-2 flex items-center justify-between">
                <h1 className='text-3xl font-bold text-blue-700'>{title}</h1>
                {
                    link ? (
                        <button onClick={() => navigate(link)}
                            className='px-4 py-1 bg-gray-300 text-black font-bold flex items-center gap-3 rounded-md'>
                            More <GrFormNextLink fontSize={25} />
                        </button>
                    ) : <></>
                }
            </div>
            <div className="products-data grid grid-cols-4 gap-5">
                {
                    users?.map(user => (
                        <UserItem key={user.id} user={user} admin={admin ?? ''} />
                    ))
                }
            </div>
        </div>
    ) : <h1>Empty</h1>
}

export default memo(UserWrapper)