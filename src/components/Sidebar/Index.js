import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoChevronDownSharp, IoChevronUpSharp, IoChevronForwardSharp, IoHeartSharp, IoBasketSharp, IoPersonCircleSharp } from 'react-icons/io5'

import { SidebarContext } from '../../context/SidebarContext'
import { AuthContext } from '../../context/AuthContext'


function Index() {
    const { isOpen } = useContext(SidebarContext)
    const [isShow, setIsShow] = useState(false)
    const { isLogin } = useContext(AuthContext);

    return (
        <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-color-primary fixed top-[55px] h-full md:w-[300px] md:max-w-[40vw] lg:max-w-0 transition-all duration-300 z-[1000] text-white text-[16px] max-md:border-t-4`}>
            <div className="my-[15px] px-2.5">
                <ul className='flex flex-col'>
                    <li className='relative'>
                        <NavLink to='allvinyl' className='block py-2.5 px-1.5 mt-[1px] uppercase font-medium'>
                            Đĩa Than
                        </NavLink>
                        <>
                            <IoChevronDownSharp className={`${isShow ? 'hidden' : 'lg:hidden block'} w-10 absolute top-[15px] right-2 cursor-pointer`} onClick={() => setIsShow(!isShow)} />
                            <IoChevronUpSharp className={`${isShow ? 'lg:hidden block' : 'hidden'} w-10 absolute top-[15px] right-2 cursor-pointer`} onClick={() => setIsShow(!isShow)} />
                        </>
                        <ul className={`${isShow ? 'h-[280px]' : ' h-0'} overflow-hidden  pl-2.5 transition-all duration-500`} >
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Đĩa Vintage</Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Tìm Theo Nghệ Sĩ</Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Đĩa Mới</Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Tìm Theo Thời Kỳ</Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Đĩa Giá Rẻ</Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Tìm Theo Thể Loại</Link>
                            </li>
                            <li className=''>
                                <Link to='/allvinyl' className="block p-[5px] mt-[1px] font-medium" >
                                    Xem Tất Cả
                                    <IoChevronForwardSharp className='inline-block ml-2 mb-[1px]' />
                                </Link>
                            </li>
                            <li className=''>
                                <Link to='' className="block p-[5px] mt-[1px] font-medium" >Tìm Theo Tâm Trạng</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='' className='block py-2.5 px-1.5 mt-[1px] uppercase font-semibold'>Mâm đĩa</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='block py-2.5 px-1.5 mt-[1px] uppercase font-semibold'>Cho người mới</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className='block py-2.5 px-1.5 mt-[1px] uppercase font-semibold'>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className="border-t-2">
                <ul className=''>
                    <li>
                        <Link to='wishlist' className='block p-[15px] uppercase'>
                            <IoHeartSharp className='inline-block mr-2 mb-1 text-[18px]' />
                            Wishlist
                        </Link>
                    </li>
                    <li>
                        <Link to='' className='block p-[15px] uppercase'>
                            <IoBasketSharp className='inline-block mr-2 mb-[6px] text-[18px]' />
                            Theo dõi đơn hàng
                        </Link>
                    </li>
                    <li>
                        {
                            isLogin ? (
                                <Link to='/account' className='block p-[15px] uppercase'>
                                    <IoPersonCircleSharp className='inline-block mr-2 mb-1 text-[18px]' />
                                    Tài khoản
                                </Link>
                            ) : (
                                <Link to='/login' className='block p-[15px] uppercase'>
                                    <IoPersonCircleSharp className='inline-block mr-1 mb-[6px] text-[18px]' />
                                    Đăng nhập/Đăng ký
                                </Link>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Index