import React, { Fragment, useEffect } from 'react'
import { BsBoxArrowRight, BsPersonCircle, BsPersonLinesFill } from 'react-icons/bs';
import { NavLink, Route } from 'react-router-dom';
import { _account, _edit, _home } from '../../utils/util/ConfigPath';
import Footer from '../HomeTemplate/Footer/Footer';
import Header from '../HomeTemplate/Header/Header';
import { useSelector } from 'react-redux';
import { _accountLogo } from './../../utils/util/ImagePath';
import { USER_LOGIN } from '../../redux/Types/QuanLyUserType';
import { history } from '../../App';

export default function AccountTemplate(props) {
    const { Component, ...restRoute } = props;
    const { userLogin } = useSelector(state => state.QuanLyUserReducer);
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <div className='grid grid-cols-5 my-10 my-48'>
                <div className='col-start-2 col-span-3 h-full'>
                    <div className='grid grid-cols-4'>
                        <div>
                            <div className='border p-4 shadow-lg drop-shadow-lg'>
                                <div className='border-b pb-8 pt-4'>
                                    <div className='flex justify-center'>
                                        <img className='rounded-full' src={_accountLogo} alt='account' />
                                    </div>
                                    <div className='mt-4 text-center text-lg font-bold text-teal-500'>
                                        {userLogin.account.Username}
                                    </div>
                                </div>
                                <div className=''>
                                    <NavLink to={_account} className='flex text-black text-base mt-4 mb-2 hover:text-teal-500 hover:underline'><BsPersonCircle className='text-2xl mr-4' />Thông tin tài khoản</NavLink>
                                </div>
                                <div className='mt-4'>
                                    <NavLink to={`${_account}${_edit}`} className='flex text-black text-base my-2 hover:text-teal-500 hover:underline '><BsPersonLinesFill className='text-2xl mr-4' />Cập nhật tài khoản</NavLink>
                                </div>
                                <div className='mt-4'>
                                    <button onClick={() => {
                                        sessionStorage.removeItem(USER_LOGIN);
                                        history.push(`${_home}`);
                                        window.location.reload();
                                    }} className='flex text-black text-base my-2 hover:text-teal-500 hover:underline '><BsBoxArrowRight className='text-2xl mr-4' />Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <Component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    }} />
}

