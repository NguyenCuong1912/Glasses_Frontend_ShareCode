import React, { Fragment } from 'react'
import { _logo2, _logoSale } from '../../../utils/util/ImagePath'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiOutlineClear,
    AiOutlineEye,
    AiOutlineSafetyCertificate
} from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <Fragment>
            <div className='grid grid-cols-7' style={{ backgroundColor: '#F8F8F8' }}>
                <div className='col-start-2 col-span-5'>
                    <div className='grid grid-cols-4'>
                        <div className='py-10'>
                            <img src={_logo2} alt='ANNA' />
                        </div>
                        <div className='col-span-3 flex items-center justify-around text-lg'>
                            <div className='flex items-center'>
                                <AiOutlineSafetyCertificate className='text-3xl mr-2' />
                                Chính sách bảo hành
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineEye className='text-3xl mr-2' />
                                Khám mắt miễn phí
                            </div>
                            <div className='flex items-center'>
                                <FiRefreshCw className='text-3xl mr-2' />
                                Thu cũ đổi mới
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineClear className='text-3xl mr-2' />
                                Vệ sinh & bảo quản kính mắt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-7 mt-4'>
                <div className='col-start-2 col-span-5'>
                    <div className='grid grid-cols-4 border-b-2 pb-4'>
                        <div>
                            <h2 className='text-xl font-bold'>Tất cả sản phẩm</h2>
                            <div className='grid grid-rows text-lg'>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Gọng kính
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Tròng kính
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Kính râm
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Phụ kiện
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Chính sách mua hàng</h2>
                            <div className='grid grid-rows text-lg'>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Hình thức thanh toán
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Chính sách giao hàng
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-teal-500'>
                                    Chính sách bảo hành
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Thông tin liên hệ</h2>
                            <div className='grid grid-rows text-lg'>
                                <span>
                                    Điện thoại: 1900 1666
                                </span>
                                <span>
                                    Email: anna@gmail.com
                                </span>
                                <span>
                                    Website: anna.com
                                </span>
                                <div className='flex text-2xl'>
                                    <NavLink to='' className='text-black hover:text-teal-500 mr-4'>
                                        <AiFillFacebook />
                                    </NavLink>
                                    <NavLink to='' className='text-black hover:text-teal-500'>
                                        <AiFillInstagram />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Về Anna</h2>
                            <div className='grid grid-rows text-lg'>
                                <span>
                                    Mã số thuế: 01233421
                                </span>
                                <img className='w-2/3' src={_logoSale} alt='Logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-4'>
                Created by Hieu
            </div>
        </Fragment>
    )
}
