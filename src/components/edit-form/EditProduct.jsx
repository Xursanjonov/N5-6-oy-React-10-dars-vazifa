import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsStore from '../../zustand/productsStore'
import { toast } from 'react-toastify'

const EditProduct = ({ product }) => {
    const { title, brand, category, price, info, count, img } = product;
    const [editProduct, setEditProduct] = useState({
        title, brand, category, price, info, count, img
    })
    const navigate = useNavigate()
    const { updateProduct } = productsStore()

    const handaleEdit = (e) => {
        e.preventDefault();
        updateProduct(editProduct)
        toast.success('OK create new Product')
        navigate('/admin/manage')
    }

    return (
        <form onSubmit={handaleEdit} className={`w-[500px] mx-auto font-semibold grid gap-3`}>
            <input value={editProduct.title} onChange={(e) => setEditProduct(p => ({ ...p, title: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Title' />
            <input value={editProduct.brand} onChange={(e) => setEditProduct(p => ({ ...p, brand: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Brand' />
            <input value={editProduct.category} onChange={(e) => setEditProduct(p => ({ ...p, category: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Category' />
            <input value={editProduct.price} onChange={(e) => setEditProduct(p => ({ ...p, price: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Price' />
            <input value={editProduct.info} onChange={(e) => setEditProduct(p => ({ ...p, info: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Info' />
            <input value={editProduct.count} onChange={(e) => setEditProduct(p => ({ ...p, count: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Count' />
            <input value={editProduct.img} onChange={(e) => setEditProduct(p => ({ ...p, img: e.target.value }))}
                required className='w-full input input-info px-4 py-2 text-black bg-white'
                type="text" placeholder='Image' />
            <button className='w-full mb-4 mt-1.5 text-lg btn btn-success' type='submit'>Save</button>
        </form>
    )
}

export default memo(EditProduct)