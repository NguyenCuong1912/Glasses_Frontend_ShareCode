import React from 'react'
import Slider from 'react-slick';
import './ProductSlick.css'
import Product from './Product';


export default function ProductSlick(props) {

    const renderItem = () => {
        return props.lstProduct.map((item, index) => {
            return <Product key={index} product={item} />
        })
    }


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings}>
            {renderItem()}
        </Slider>

    )
}
