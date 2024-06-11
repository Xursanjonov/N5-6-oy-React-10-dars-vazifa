import React, { memo, useState } from 'react'
import { nanoid } from 'nanoid'
import CreateProduct from './CreateProduct'
import CreateUser from './CreateUser'

const Create = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='w-[100%] h-screen mx-auto bg-white'>
            <div className="w-[500px] px-8 mt-10 font-semibold flex flex-col gap-5">
                <div className="w-[500px] flex items-center justify-between">
                    <h1 className={`text-3xl my-2.5 font-bold ${show ? 'text-orange-500' :'text-black'}`}>
                        Create New {show ? 'Product' : 'Users'}
                    </h1>
                    <button onClick={() => setShow(p => !p)}
                        className={`w-32 font-bold text-xl btn ${show ? 'btn-info' : 'btn-warning'}`}>
                        {show ? 'Users' : 'Product'}
                    </button>
                </div>
                {
                    show ? <CreateProduct show={show} /> : <CreateUser show={show} key={nanoid()} />
                }
            </div>
        </div>
    )
}

export default memo(Create)