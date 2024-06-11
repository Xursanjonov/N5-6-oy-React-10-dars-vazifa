import React, { memo, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ProductsWrapper from '../../components/products-wrapper/ProductsWrapper'
import UserWrapper from '../../components/users-wrapper/UserWrapper'
import productsStore from '../../zustand/productsStore'
import usersStore from '../../zustand/usersStore'

const Home = () => {
    const { getProduct, products } = productsStore()
    const { getUser, users } = usersStore()

    useEffect(() => {
        getProduct()
    }, [getProduct]);
    useEffect(() => {
        getUser()
    }, [getUser]);

    return (
        <section className='flex flex-col gap-10'>
            <div className='my-5'>
                <h1 className='text-3xl text-center font-bold'>Carusel</h1>
            </div>
            <ProductsWrapper key={nanoid()} title={'Products'} data={products} link={'/products'} />
            <UserWrapper key={nanoid()} title={'Users'} users={users} link={'/users'} />
        </section>
    )
}

export default memo(Home)