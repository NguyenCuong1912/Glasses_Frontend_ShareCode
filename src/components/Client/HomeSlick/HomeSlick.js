import React from 'react'
import Slider from "react-slick";
import { _banner1, _banner2 } from '../../../utils/util/ImagePath';


export default function HomeSlick() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img src={_banner1} alt='banner1' />
                </div>
                <div>
                    <img style={{ height: '616px' }} src={_banner2} alt='banner2' />
                </div>
            </Slider>
        </div>
    )
}
