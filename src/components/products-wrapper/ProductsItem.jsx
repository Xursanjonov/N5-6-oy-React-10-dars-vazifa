import React, { Fragment, memo } from 'react'
import productsStore from '../../zustand/productsStore'

const ProductsItem = ({ el, admin }) => {
    const { deleteProduct } = productsStore()

    return (
        <div className="w-[300px] h-[360px] mx-auto border-2 flex flex-col gap-4 rounded-xl">
            <figure className='w-[296px] h-[200px]'>
                <img className='w-[100%] h-[100%] mx-auto object-cover rounded-t-xl'
                    src={el.img} alt={el.title} />
            </figure>
            <div className="product-info px-5 flex flex-col gap-2">
                <h4 className='text-lg font-semibold'>{el.title}</h4>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <p className='text-xl font-semibold text-blue-500'>{el.category}</p>
                        <p className='text-lg font-semibold text-red-500'>${el.price}</p>
                    </div>
                    <p>Count: {el.count}</p>
                </div>
                <div className="flex items-center justify-end gap-4">
                    {
                        admin ?
                            <Fragment>
                                <button onClick={() => confirm('Rostan ham o`chirillsinmi ?') ? deleteProduct(el.id) : ''}
                                    className="p-2 flex items-center justify-center btn-outline rounded-md bg-red-600 text-white">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <button
                                    className="p-2 flex items-center justify-center btn-outline rounded-md bg-orange-500 text-black">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                            </Fragment> :
                            <Fragment>
                                <button className="p-2 flex items-center justify-center btn-outline rounded-md bg-gray-100 text-black">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                                <button className="p-2 flex items-center justify-center btn-outline rounded-md bg-green-300 text-black">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(ProductsItem)