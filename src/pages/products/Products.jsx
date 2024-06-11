import React, { memo, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ProductsWrapper from '../../components/products-wrapper/ProductsWrapper'
import baseUrl from '../../config'

const Products = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        baseUrl.get(`products`)
            .then(res => setData(res.data))
            .catch(er => console.error(er))
    }, [])

    return (
        <section>
            <ProductsWrapper key={nanoid()} data={data} title={'Products'} />
        </section>
    )
}

export default memo(Products)