import React, { Fragment } from 'react'
import { _logo } from '../../../utils/util/ImagePath'
import { NavLink } from 'react-router-dom';
import {
    BsHandbag,
    BsPersonCircle,
    BsSearch
} from 'react-icons/bs';
import NavHeader from './NavHeader';
import { Dropdown, Menu, Space } from 'antd';
import { history } from '../../../App';
import {
    _account,
    _cart,
    _home,
    _login,
    _order,
    _register
} from '../../../utils/util/ConfigPath';
import { useSelector } from 'react-redux';
import { USER_LOGIN } from '../../../redux/Types/QuanLyUserType';
import _ from 'lodash'




export default function Header() {

    const { userLogin } = useSelector(state => state.QuanLyUserReducer);

    const { cart } = useSelector(state => state.QuanLyCartReducer);

    let number = 0;
    cart?.forEach(element => {
        number += element.Quantity
    });

    const user = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_login}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-teal-500">Đăng nhập</button>,
                    key: '0',
                },
                {
                    label: <button onClick={() => {
                        history.push(`${_register}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-teal-500">Đăng ký</button>,
                    key: '1',
                },
            ]}
        />
    )
    const menu = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_account}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-teal-500">Thông tin tài khoản</button>,
                    key: '0',
                },
                {
                    label: <Fragment>
                        <button onClick={() => {
                            history.push(`${_order}/${userLogin.account.id}`);
                            window.location.reload();
                        }} className="self-center px-4 py-2 hover:text-teal-500">Lịch sử đặt hàng</button>
                    </Fragment>,
                    key: '1',
                },
                {
                    label: <button onClick={() => {
                        sessionStorage.removeItem(USER_LOGIN);
                        history.push(`${_home}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-teal-500">Đăng xuất</button>,
                    key: '2',
                },
            ]}
        />
    )


    const operations = <Fragment>
        {!_.isEmpty(userLogin) ?
            <Dropdown
                overlay={menu}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='flex items-center text-black ml-4 cursor-pointer'>
                            <BsPersonCircle className='text-2xl mr-1' />
                            <span className='flex items-center text-base font-bold '>{userLogin.account.Username}</span>
                        </div>
                    </Space>
                </span>
            </Dropdown>
            : <Dropdown
                overlay={user}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='text-black cursor-pointer hover:text-teal-500'>
                            <BsPersonCircle />
                        </div>
                    </Space>
                </span>
            </Dropdown>}
    </Fragment>

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white grid grid-cols-7 py-4 shadow-lg drop-shadow-2xl'>
            <div className='col-start-2 '>
                <img className='cursor-pointer' title='Trang chủ' src={_logo} alt='ANNA' onClick={() => {
                    history.push(`${_home}`)
                }} />
            </div>
            <div className='col-span-3'>
                <div className='flex justify-around py-4 uppercase font-medium'>
                    <NavHeader />
                </div>
            </div>
            <div className='flex items-center justify-around text-2xl'>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    <BsSearch />
                </NavLink>

                {operations}
                <NavLink to={_cart} className='text-black flex hover:text-teal-500'>
                    <BsHandbag />
                    <span className='text-base text-red-500 -mt-1'>({number})</span>
                </NavLink>
            </div>
        </div>
    )
}
