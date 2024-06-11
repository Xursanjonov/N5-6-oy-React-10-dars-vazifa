import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import usersStore from '../../zustand/usersStore';

const EditUser = ({ user }) => {
    const { fullName, username, email, age, phoneNumber, img } = user;
    const [editUser, setEditUser] = useState({ fullName, username, email, age, phoneNumber, img })
    const navigate = useNavigate()
    const { updateUser } = usersStore()

    const handaleEdit = (e) => {
        e.preventDefault();
        console.log(editUser);
        toast.success(`OK User updated ✅`)
        // navigate('/admin/manage')
    }

    return (
        <form onSubmit={handaleEdit} className={`w-[500px] mx-auto mt-5 font-semibold grid gap-3`}>
            <input value={editUser.fullName} onChange={(e) => setEditUser(p => ({ ...p, fullName: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Full Name' />
            <input value={editUser.username} onChange={(e) => setEditUser(p => ({ ...p, username: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='username' />
            <input value={editUser.email} onChange={(e) => setEditUser(p => ({ ...p, email: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='email' />
            <input value={editUser.age} onChange={(e) => setEditUser(p => ({ ...p, age: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Age' />
            <input value={editUser.phoneNumber} onChange={(e) => setEditUser(p => ({ ...p, phoneNumber: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Phone Number' />
            <input value={editUser.img} onChange={(e) => setEditUser(p => ({ ...p, img: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Image' />
            <button className='w-full mb-4 mt-1.5 text-xl btn btn-success' type='submit'>Save</button>
        </form>
    )
}

export default memo(EditUser)