import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { _home } from '../../../utils/util/ConfigPath'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/QuanLyProductAction';
import { GetAllCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import Product from '../../../components/Client/Product/Product';
import ProductSlick from '../../../components/Client/Product/ProductSlick';

export default function ProductList(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch();
    const { lstProduct } = useSelector(state => state.QuanLyProductReducer);
    console.log('first', lstProduct)
    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);
    console.log('cate', lstCate)
    useEffect(() => {
        dispatch(GetAllProductAction())
        dispatch(GetAllCateAction())
    }, [])

    const renderItem = () => {
        return lstProduct.map((item, index) => {
            return <Fragment>
                {id == item.Category_ID ? <Product key={index} product={item} /> : ''}
            </Fragment>
        })
    }

    return (
        <div className='mt-20'>
            <div className='relative'>
                <img className='w-full' src='../img/anna/banner.jpg' alt='banner' />
                <div className='absolute bottom-36 left-72 text-white'>
                    <div className='uppercase text-6xl font-bold my-10'>
                        sản phẩm
                    </div>
                    <div className='text-lg font-medium'>
                        <NavLink to={_home} className='text-white hover:text-teal-500' >Trang chủ </NavLink>
                        / Sản phẩm
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 my-20'>
                <div className='col-start-2 col-span-3'>
                    <div className='mb-8 uppercase text-center text-2xl font-bold text-teal-500'>
                        {lstCate?.map((cate, index) => {
                            return <Fragment>
                                {cate.id == id ? <div>{cate.CategoryName}</div> : ''}
                            </Fragment>
                        })}
                    </div>
                    <div className='grid grid-cols-4'>
                        {renderItem()}
                    </div>
                    <div>
                        <div className='uppercase my-8 text-2xl font-bold'>
                            Sản phẩm nổi bật
                        </div>
                        <ProductSlick lstProduct={lstProduct} />
                    </div>
                </div>
            </div>
        </div>
    )
}
