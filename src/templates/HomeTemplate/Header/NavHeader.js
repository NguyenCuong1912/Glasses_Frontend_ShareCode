import { Dropdown, Menu, Space } from 'antd'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { _home } from '../../../utils/util/ConfigPath'
import { AiOutlineCaretDown } from 'react-icons/ai';

export default function NavHeader() {

    const productCate = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink to=''>
                            Gọng kính
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to=''>
                            Tròng kính
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <NavLink to=''>
                            Kính dâm
                        </NavLink>
                    ),
                },
            ]}
        />
    );
    const blog = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink to='' className='uppercase'>
                            Tin tức về Anna
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to='' className='uppercase'>
                            Góc tư vấn chọn kính đẹp
                        </NavLink>
                    ),
                },
            ]}
        />
    );



    return (
        <Fragment>
            <div>
                <NavLink to={_home} className='text-black hover:text-teal-500 active:text-teal-500'>
                    Trang chủ
                </NavLink>
            </div>
            <div>
                <Dropdown overlay={productCate}>
                    <NavLink to='' className='text-black hover:text-teal-500' onClick={(e) => e.preventDefault()}>
                        <Space>
                            Sản phẩm
                            <AiOutlineCaretDown />
                        </Space>
                    </NavLink>
                </Dropdown>
            </div>
            <div>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    Về anna
                </NavLink>
            </div>
            <div>
                <Dropdown overlay={blog}>
                    <NavLink to='' className='text-black hover:text-teal-500' onClick={(e) => e.preventDefault()}>
                        <Space>
                            Blog
                            <AiOutlineCaretDown />
                        </Space>
                    </NavLink>
                </Dropdown>
            </div>
            <div>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    Order checking
                </NavLink>
            </div>
            <div>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    Store
                </NavLink>
            </div>
        </Fragment>
    )
}
