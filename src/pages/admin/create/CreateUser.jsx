import React, { memo } from 'react'
import baseUrl from '../../../config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateUser = ({ show }) => {
    const navigate = useNavigate()

    const handaleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        baseUrl.post(`/users`, user).then(res => {
            console.log(res.data);
            navigate('/admin/manage')
            toast.success('OK 201 Create new User 🔥')
        }).catch(err => {
            toast(err)
            console.error(err);
        })
        console.log(user);
    }

    return (
        <form onSubmit={handaleSubmit} className={`w-[500px] mx-auto mt-5 font-semibold ${show ? 'hidden' : 'grid'} gap-3`}>
            <input name='fullName'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Full Name' />
            <input name='username'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='username' />
            <input name='email'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='email' />
            <input name='age'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Age' />
            <input name='phoneNumber'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Phone Number' />
            <input name='img'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Image' />
            <button className='w-full mb-4 mt-1.5 text-xl btn btn-success' type='submit'>Create</button>
        </form>
    )
}

export default memo(CreateUser)