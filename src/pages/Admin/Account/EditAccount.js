import { Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import React, { Fragment, useEffect } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { GetDetailUserAction, UpdateUserAction } from '../../../redux/Actions/QuanLyUserAction';
import { _account, _admin } from '../../../utils/util/ConfigPath';
import { BsBackspace } from 'react-icons/bs';

export default function EditAccount(props) {
    let { id } = props.match.params;

    const dispatch = useDispatch();

    const { editUser } = useSelector(state => state.QuanLyUserReducer);


    useEffect(() => {
        dispatch(GetDetailUserAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Username: editUser.Username,
            Password: editUser.Password,
            Role: editUser.Role,
            PhoneNumber: editUser.PhoneNumber,
            Address: editUser.Address
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .required("Không được trống !"),

            Password: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

            PhoneNumber: Yup.string()
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
                    message: "Số điện thoại chưa đúng",
                    excludeEmptyString: false,
                })
                .required("Không được trống !"),

            Address: Yup.string()
                .required("Không được trống !"),
        }),
        onSubmit: values => {
            dispatch(UpdateUserAction(id, values))
        }
    })

    function changeSelect(value) {
        formik.setFieldValue('Role', value)
    }
    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div>
                    <button type='button' title='Trở về trang tài khoản' className='text-4xl text-teal-500 hover:text-teal-700' onClick={() => {
                        history.push(`${_admin}${_account}`)
                    }}>
                        <BsBackspace />

                    </button>
                </div>
                <div className='col-span-3 col-start-3 mt-16 h-full rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='mt-8 text-center text-4xl font-bold text-teal-500'>Cập nhật tài khoản</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='mb-2'>Tài khoản:</div>
                            <input type="text" name='Username' value={formik.values.Username} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' disabled />
                            <div className='mt-4 mb-2'>Mật khẩu:</div>
                            <input type="text" name='Password' onChange={formik.handleChange} value={formik.values.Password} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập mật khẩu..." />
                            {formik.errors.Password && formik.touched.Password && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Password}</p>
                            )}
                            <div className='mt-4 mb-2'>Phân quyền:</div>
                            <Select className='w-1/5' placeholder='Chọn phân quyền' value={formik.values.Role} name='Role' onChange={changeSelect}>
                                {['ADMIN', 'CLIENT'].map(user => {
                                    return <Select.Option value={user}>{user}</Select.Option>
                                })}
                            </Select>

                            <div className='mt-4 mb-2'>Số điện thoại:</div>
                            <input type="text" name='PhoneNumber' onChange={formik.handleChange} value={formik.values.PhoneNumber} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập số điện thoại..." />
                            {formik.errors.PhoneNumber && formik.touched.PhoneNumber && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.PhoneNumber}</p>
                            )}
                            <div className='mt-4 mb-2'>Địa chỉ:</div>
                            <input type="text" name='Address' onChange={formik.handleChange} value={formik.values.Address} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập địa chỉ..." />
                            {formik.errors.Address && formik.touched.Address && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Address}</p>
                            )}
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-teal-700 rounded w-24 h-10 text-lg font-bold text-teal-500 hover:text-white hover:bg-teal-500' >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
