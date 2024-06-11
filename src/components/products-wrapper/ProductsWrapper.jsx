import React, { memo } from 'react'
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import ProductsItem from './ProductsItem'

const ProductsWrapper = ({ data, title, link, admin }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-5'>
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
                    data ? (
                        data?.map(product => (
                            <ProductsItem key={product.id} el={product} admin={admin} />
                        ))) : <h1>Empty</h1>
                }
            </div>
        </div>
    )
}


export default memo(ProductsWrapper)