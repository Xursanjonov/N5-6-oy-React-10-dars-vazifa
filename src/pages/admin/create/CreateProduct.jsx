import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import productsStore from '../../../zustand/productsStore';

const CreateProduct = ({ show }) => {
    const navigate = useNavigate()
    const { createProduct } = productsStore()

    const handaleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        const products = Object.fromEntries(formData.entries())
        createProduct(products)
        toast.success('OK create new Product')
        navigate('/admin/manage')
    }

    return (
        <form onSubmit={handaleSubmit} className={`w-[500px] font-semibold ${show ? 'grid' : 'hidden'} gap-3`}>
            <input name='title'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Title' />
            <input name='brand'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Brand' />
            <input name='category'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Category' />
            <input name='price'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Price' />
            <input name='info'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Info' />
            <input name='count'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Count' />
            <input name='img'
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Image' />
            <button className='w-full mb-4 mt-1.5 text-lg btn btn-success' type='submit'>Create</button>
        </form>
    )
}

export default memo(CreateProduct)