import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
import { _home, _login } from '../../utils/util/ConfigPath'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from "yup"
import { RegisterAction } from '../../redux/Actions/QuanLyUserAction';


export default function Register() {
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
            Role: "CLIENT"
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .required("Không được trống !"),
            Password: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

        }),

        onSubmit: values => {
            dispatch(RegisterAction(values))
        },
    });
    return (
        <Fragment>
            <section className="h-screen">
                <div className='grid grid-cols-5 h-full content-center'>
                    <div className="col-start-2 col-span-3 h-full text-gray-800">
                        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                            <div onClick={() => {
                                history.push(`${_home}`)
                            }} className="grow-0 flex justify-center shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                                <img title='Trở về trang chủ' src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-93.jpg" className="w-5/6 rounded-3xl shadow-2xl drop-shadow-2xl mb-8 cursor-pointer" alt='' />
                            </div>
                            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="w-full flex justify-center lg:justify-center">
                                        <div className='text-center'>
                                            <p className="text-2xl uppercase font-bold">Đăng ký</p>
                                            <p className="text-lg">Hãy đăng ký để được hưởng đặc quyền riêng dành cho bạn</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" name='Username' onChange={formik.handleChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nhập tài khoản..." />
                                        {formik.errors.Username && formik.touched.Username && (
                                            <p className='m-0 mt-1 text-red-600'>{formik.errors.Username}</p>
                                        )}
                                    </div>
                                    <div className="mb-6">
                                        <input type="password" name='Password' onChange={formik.handleChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nhập mật khẩu..." />
                                        {formik.errors.Password && formik.touched.Password && (
                                            <p className='m-0 mt-1 text-red-600'>{formik.errors.Password}</p>
                                        )}
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <button type="submit" className="inline-block w-full px-7 py-3 bg-teal-500 border border-teal-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-teal-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                            Đăng ký ngay
                                        </button>
                                        <div className="items-center my-4">
                                            <NavLink to='' className="text-gray-800 hover:text-red-500">Quên mật khẩu?</NavLink>
                                        </div>
                                        <p className="text-sm text-center font-semibold mb-0">
                                            Bạn đã có tài khoản Anna?
                                            <NavLink to={_login} className="ml-2 text-teal-500 hover:text-teal-700 underline focus:text-red-700 transition duration-200 ease-in-out">Đăng nhập ngay</NavLink>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </Fragment>
    )
}
