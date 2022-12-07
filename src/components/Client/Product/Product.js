import React, { Fragment } from 'react'
import { _glass1 } from '../../../utils/util/ImagePath'

export default function Product() {
    return (
        <Fragment>
            <div className='p-4'>
                <div className='bg-white rounded-3xl shadow-lg'>
                    <img className='rounded-t-3xl' src={_glass1} alt='' />
                    <div className='text-center py-2'>
                        <h3 className='text-lg font-bold'>hello</h3>
                        <div className='flex justify-around mb-2'>
                            <div>199000 <span className='underline'>đ</span></div>
                            <div className='line-through'>199000 <span className='underline'>đ</span></div>
                        </div>
                        <button className='py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
