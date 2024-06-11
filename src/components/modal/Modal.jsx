import React, { Fragment, memo } from 'react'

const Modal = ({ children, setClose }) => {
    return (
        <Fragment>
            <div onClick={() => setClose(null)} className='fixed z-30 top-0 left-0 w-[100%] h-screen bg-[#0005]'></div>
            <div className='w-[560px] h-[580px] mx-auto top-[10%] left-[30%] z-50 translate-[-50%, -50%] fixed rounded-2xl bg-white'>
                <h1 className='text-3xl text-center my-5'>Edit</h1>
                {children}
            </div>
        </Fragment>
    )
}

export default memo(Modal)