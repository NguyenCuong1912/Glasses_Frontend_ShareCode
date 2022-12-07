import React, { Fragment } from 'react'
import HomeSlick from '../../../components/Client/HomeSlick/HomeSlick'
import Product from '../../../components/Client/Product/Product';
import Slick from '../../../components/Client/Product/Slick'
import { _bg, _product1 } from '../../../utils/util/ImagePath'
import ProductSlick from './../../../components/Client/Product/ProductSlick';

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

                    <div className='my-20'>
                        <ProductSlick />
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${_bg})`, backgroundRepeat: 'no-repeat' }}>
                <div className='grid grid-cols-7'>
                    <div className='col-start-2 col-span-5'>
                        <div className='mt-28 mb-16'>
                            <div className='uppercase text-white'>
                                Hot Trend
                            </div>
                            <div className='text-4xl font-bold uppercase text-white'>
                                Hàng mới lên kệ
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                            <div className='w-1/5'>
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
