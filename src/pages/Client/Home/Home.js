import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomeSlick from '../../../components/Client/HomeSlick/HomeSlick'
import Product from '../../../components/Client/Product/Product';
import Slick from '../../../components/Client/Product/Slick'
import { GetAllProductAction } from '../../../redux/Actions/QuanLyProductAction';
import { _bg, _product1 } from '../../../utils/util/ImagePath'
import ProductSlick from './../../../components/Client/Product/ProductSlick';

export default function Home() {
    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.QuanLyProductReducer);

    useEffect(() => {
        dispatch(GetAllProductAction())
    }, [])

    const renderItem = () => {
        return lstProduct?.slice(0, 8).map((item, index) => {
            return <Product key={index} product={item} />
        })
    }

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
                        <div className='relative mr-2'>
                            <img className='rounded-3xl' src={_product1} alt='product1' />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-10 py-2 px-4 text-white bg-black font-medium uppercase rounded-lg hover:bg-teal-500'>Chọn kính ngay</button>
                            </div>
                        </div>
                        <div className='mx-8'>
                            <Slick />
                        </div>
                    </div>

                    <div className='my-20'>
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
                                <ProductSlick lstProduct={lstProduct} />
                            </div>
                        </div>

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
                            {renderItem()}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
