import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { history } from '../../../App'
import { _admin, _cate } from '../../../utils/util/ConfigPath'
import { AddCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { BsBackspace } from 'react-icons/bs';

export default function AddCategory() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            CategoryName: '',
        },
        validationSchema: Yup.object({
            CategoryName: Yup.string()
                .required("Không được trống !"),
        }),
        onSubmit: values => {
            dispatch(AddCateAction(values))
        },
    });
    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div>
                    <button type='button' title='Trở về trang loại sản phẩm' className='text-4xl text-teal-500 hover:text-teal-700' onClick={() => {
                        history.push(`${_admin}${_cate}`)
                    }}>
                        <BsBackspace />

                    </button>
                </div>
                <div className='col-span-3 col-start-3 mt-32 h-72 rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='text-center text-4xl font-bold text-teal-500'>Thêm loại sản phẩm</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type="text" name='CategoryName' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Tên loại sản phẩm..." />
                            {formik.errors.CategoryName && formik.touched.CategoryName && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.CategoryName}</p>
                            )}
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-teal-600 rounded w-24 h-10 text-lg font-bold text-teal-500 hover:text-white hover:bg-teal-600' >Thêm </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
