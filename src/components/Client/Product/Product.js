import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { DOMAIN_IMG } from '../../../utils/settings/config';
import { message } from 'antd';
import { ADD_CART } from './../../../redux/Types/QuanLyCartType';
import { _detail } from './../../../utils/util/ConfigPath';
import { NavLink } from 'react-router-dom';

export default function Product(props) {
    const dispatch = useDispatch();
    const { product } = props;
    return (
        <Fragment>
            <div className='p-4'>
                <div className='bg-white rounded-3xl shadow-lg'>
                    <NavLink to={`${_detail}/${product.id}`}>
                        <img className='rounded-t-3xl cursor-pointer' title='Chi tiết sản phẩm' src={`${DOMAIN_IMG}${product?.ProductImage}`} alt='' />
                    </NavLink>
                    <div className='text-center py-2'>
                        <h3 className='text-lg font-bold'>{product?.ProductName}</h3>
                        <div className='flex justify-around mb-2'>
                            <div className='text-red-500'>{(product?.Price - product?.Price * product?.Discount / 100).toLocaleString()} <span className='underline'>đ</span></div>
                            <div className='line-through'>{(product?.Price * 1).toLocaleString()} <span className='underline'>đ</span></div>
                        </div>
                        <button onClick={() => {
                            dispatch({
                                type: ADD_CART,
                                data: {
                                    item: product,
                                    number: 1
                                }
                            })
                            message.success('Sản phẩm đã được thêm vào giỏ hàng')
                        }} className='py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
