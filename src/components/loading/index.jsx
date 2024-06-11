import React, { memo } from 'react'

const Loading = () => {
    return (
        <section className='w-full h-screeen mt-[20%] flex items-center justify-center'>
            <h1 className='loading loading-lg loading-info'>Loading...</h1>
        </section>
    )
}

export default memo(Loading)