import React, { memo, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import usersStore from '../../../zustand/usersStore'
import productsStore from '../../../zustand/productsStore'
import UserWrapper from '../../../components/users-wrapper/UserWrapper'
import ProductsWrapper from '../../../components/products-wrapper/ProductsWrapper'

const Manage = () => {
    const { users, getUser, isLoading } = usersStore()
    const { products, getProduct, isLoading: loading } = productsStore()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            getUser()
        } else {
            getProduct()
        }
    }, [show])

    return (
        <div className='w-[100%] mb-10 bg-white'>
            <div className="w-[100%] px-8 mt-10 font-semibold flex flex-col gap-5">
                <div className="w-[500px] ms-12 flex items-center justify-between">
                    <h1 className={`text-3xl my-2.5 font-bold ${show ? 'text-orange-500' : 'text-blue-500'}`}>
                        {show ? 'Users' : 'Products'}
                    </h1>
                    <button onClick={() => setShow(p => !p)}
                        className={`w-24 font-bold text-lg btn ${show ? 'btn-info' : 'btn-warning'}`}>
                        {show ? 'Products' : 'Users'}
                    </button>
                </div>
                {
                    show ? <UserWrapper key={nanoid()} admin={true} users={users} show={show} />
                        : <ProductsWrapper key={nanoid()} admin={true} data={products} show={show} />
                }
            </div>
        </div>
    )
}

export default memo(Manage)