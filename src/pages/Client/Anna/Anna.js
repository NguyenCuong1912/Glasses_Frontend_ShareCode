import React from 'react'
import { NavLink } from 'react-router-dom'
import { _home } from '../../../utils/util/ConfigPath'

export default function Anna() {
    return (
        <div className='mt-20'>
            <div className='relative'>
                <img className='w-full' src='../img/anna/banner.jpg' alt='banner' />
                <div className='absolute bottom-36 left-72 text-white'>
                    <div className='uppercase text-6xl font-bold my-10'>
                        Lời cảm ơn
                    </div>
                    <div className='text-lg font-medium'>
                        <NavLink to={_home} className='text-white hover:text-teal-500' >Trang chủ </NavLink>
                        / Về anna
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-7 my-32'>
                <div className='col-start-2 col-span-5'>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-cols-2'>
                            <img src='../img/anna/content1.jpg' alt='content1' />
                            <img className='mt-24' src='../img/anna/content1-2.jpg' alt='content1-2' />
                        </div>
                        <div className='uppercase mt-24 text-5xl font-medium'>
                            Cảm ơn bạn đã lựa chọn chúng tôi
                        </div>
                    </div>
                    <div className='grid grid-cols-2 my-32'>
                        <div className='uppercase mt-24 text-5xl font-medium'>
                            Hệ thống cửa hàng kính mắt
                        </div>
                        <div>
                            <img src='../img/anna/content2.jpg' alt='content2' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div className='uppercase my-16 text-4xl font-bold'>
                                Vũ trụ truyền thông
                            </div>
                            <div className='text-lg mr-20'>
                                Kính mắt Anna chắc không còn quá xa lạ với giới trẻ nữa. Đây là kênh thông tin mua sắm và giải trí dành cho giới trẻ, là “món ăn tinh thần” hằng ngày không thể thiếu của mỗi người trẻ. <br />
                                Được thành lập từ năm 2015, trải qua hơn 7 năm phát triển kính mắt Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn trẻ. Cập nhật thông tin thời trang nhanh chóng và phù hợp với thị hiếu của khán giả thông qua các mạng xã hội như Facebook, Tiktok, Instagram, Youtube, kính mắt Anna là lựa chọn hàng đầu cho những ai muốn tận hưởng các bài viết, video vừa mang tính giải trí mà vẫn có đầy đủ thông tin cần thiết.
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <div className='w-3/4 h-48 rounded-lg shadow-2xl drop-shadow-2xl bg-blue-500'>
                                    <img className='w-16 h-16 rounded-md absolute top-4 left-4' src='../img/anna/facebook.png' alt='facebook' />
                                    <div className='absolute bottom-4 left-4 text-white'>
                                        ANNA <br />
                                        @anna.com
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-3/4 h-48 ml-8 my-8 rounded-lg shadow-2xl drop-shadow-2xl bg-blue-500' style={{ background: 'linear-gradient(225deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)' }}>
                                    <img className='w-16 h-16 absolute top-4 left-4 rounded-2xl' src='../img/anna/insta.png' alt='instagram' />
                                    <div className='absolute bottom-4 left-4 text-white'>
                                        ANNA <br />
                                        @anna.com
                                    </div>
                                </div>
                                <div className='w-3/4 h-48 my-16 rounded-lg shadow-2xl drop-shadow-2xl bg-blue-500' style={{ background: 'linear-gradient(225deg, #30CFD0, #e73c7e, #330867, #23d5ab)' }}>
                                    <img className='w-16 h-16 rounded-md absolute top-4 left-4' src='../img/anna/tiktok.png' alt='tiktok' />
                                    <div className='absolute bottom-4 left-4 text-white'>
                                        ANNA <br />
                                        @anna.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
