import React from 'react'
import { _logo } from '../../../utils/util/ImagePath'
import { NavLink } from 'react-router-dom';

import { BsHandbag, BsPersonCircle, BsSearch } from 'react-icons/bs';
import NavHeader from './NavHeader';

export default function Header() {
    return (
        <div className='fixed top-0 left-0 right-0 bg-white grid grid-cols-7 py-4 border-b shadow-lg drop-shadow-2xl'>
            <div className='col-start-2 '>
                <img src={_logo} alt='ANNA' />
            </div>
            <div className='col-span-3'>
                <div className='flex justify-around py-4 uppercase font-medium'>
                    <NavHeader />
                </div>
            </div>
            <div className='flex items-center justify-around mx-8 text-2xl'>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    <BsSearch />
                </NavLink>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    <BsPersonCircle />
                </NavLink>
                <NavLink to='' className='text-black hover:text-teal-500'>
                    <BsHandbag />
                </NavLink>
            </div>
        </div>
    )
}
