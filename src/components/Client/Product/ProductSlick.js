import React from 'react'
import Slider from 'react-slick';
import './ProductSlick.css'
import { _glass1 } from './../../../utils/util/ImagePath';

export default function ProductSlick() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div className='bg-teal-100 rounded-3xl'>
            <div className='rounded-t-3xl px-8 py-6 text-white text-base' style={{ backgroundColor: '#81C8C2' }}>
                <div className='uppercase font-bold text-4xl'>
                    Săn flash sale
                </div>
                <div>
                    Hàng trăm sản phẩm bắt trend mới nhất
                </div>
            </div>
            <div className='py-6'>
                <Slider {...settings}>
                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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

                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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

                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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

                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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

                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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

                    <div className='px-4'>
                        <div className='bg-white rounded-3xl'>
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
                </Slider>
            </div>
        </div>
    )
}
