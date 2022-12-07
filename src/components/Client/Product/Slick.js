import React, { Fragment } from 'react'
import Slider from "react-slick";
import './Slick.css'
import {
    _product2,
    _product3,
    _product4,
    _product5
} from '../../../utils/util/ImagePath';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={`${className}`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
        </div>
    )
}

export default function Slick() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,

    };
    return (
        <Fragment>
            <Slider {...settings}>
                <div className='px-2'>
                    <img style={{ height: '425px' }} className='w-full rounded-3xl' src={_product2} alt='' />
                    <div className='flex justify-center'>
                        <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chi tiết</button>
                    </div>
                </div>
                <div className='px-2'>
                    <img style={{ height: '425px' }} className='w-full rounded-3xl' src={_product3} alt='' />
                    <div className='flex justify-center'>
                        <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chi tiết</button>
                    </div>
                </div>
                <div className='px-2'>
                    <img style={{ height: '425px' }} className='w-full rounded-3xl' src={_product4} alt='' />
                    <div className='flex justify-center'>
                        <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chi tiết</button>
                    </div>
                </div>
                <div className='px-2'>
                    <img style={{ height: '425px' }} className='w-full rounded-3xl' src={_product5} alt='' />
                    <div className='flex justify-center'>
                        <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chi tiết</button>
                    </div>
                </div>
            </Slider>
        </Fragment>
    )
}
