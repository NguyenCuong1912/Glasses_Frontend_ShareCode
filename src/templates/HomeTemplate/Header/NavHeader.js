import { Dropdown, Menu, Space } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { _anna, _home, _product } from '../../../utils/util/ConfigPath'
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { history } from '../../../App';

export default function NavHeader() {

    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCateAction())
    }, [])

    const productCate = (
        <Menu>
            {lstCate?.map((cate, index) => {
                return <Fragment key={index}>
                    <Menu.Item key={cate.id}>
                        <div onClick={() => {
                            history.push(`${_product}/${cate.id}`)
                        }} className='pr-20 text-base'>{cate.CategoryName}</div>
                    </Menu.Item>
                </Fragment>
            })}
        </Menu>
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
                <NavLink to={_anna} className='text-black hover:text-teal-500'>
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
