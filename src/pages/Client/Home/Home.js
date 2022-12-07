import React, { Fragment } from 'react'
import HomeSlick from '../../../components/Client/HomeSlick/HomeSlick'
import Slick from '../../../components/Client/Product/Slick'
import { _product1 } from '../../../utils/util/ImagePath'

export default function Home() {
    return (
        <Fragment>
            <div className='text-center uppercase py-2 bg-black text-white mt-20'>
                <div className='mt-2 font-medium'>
                    See better than yesterday - Anna love you!
                </div>
            </div>
            <HomeSlick />
            <div className='grid grid-cols-7 mt-4'>
                <div className='col-start-2 col-span-5'>
                    <div className='grid grid-cols-2'>
                        <div className='relative mr-1'>
                            <img className='rounded-3xl' src={_product1} alt='product1' />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chọn kính ngay</button>
                            </div>
                        </div>
                        <div className='mx-6'>
                            <Slick />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
