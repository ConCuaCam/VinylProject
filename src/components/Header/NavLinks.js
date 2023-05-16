import React from 'react'
import { Link } from 'react-router-dom'
import navlinks from '../../data/links'
function NavLinks() {
    return (
        <div className="header-center w-[533px] lg:block hidden">
            <ul className='flex flex-wrap'>
                {
                    navlinks.map((item, index) => (
                        <li key={index}>
                            <span  className='navLink cursor-pointer relative group'>
                                {item.display} {item.icon}
                                {
                                    item.sublinks && (
                                        <ul className='subnav group-hover:visible'>
                                            {
                                                item.sublinks.map((sublink, id) => (
                                                    <li className='w-[200px] inline-block' key={id}>
                                                        <Link to={sublink.path} className='subnav-item'>{sublink.display} {sublink.icon}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </span>
                        </li>
                    ))
                }
                {/* <li>
                    <NavLink to='allvinyl' className='navLink relative group'>
                        Đĩa Than
                        <IoChevronDownSharp className='inline-block ml-1' />
                        <ul className='subnav group-hover:visible transition-all duration-500'>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Đĩa Vintage</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Tìm Theo Nghệ Sĩ</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Đĩa Mới</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Tìm Theo Thời Kỳ</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Đĩa Giá Rẻ</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Tìm Theo Thể Loại</Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='/allvinyl' className="subnav-item" >
                                    Xem Tất Cả
                                    <IoChevronForwardSharp className='inline-block ml-1 mb-[3px]' />
                                </Link>
                            </li>
                            <li className='w-[200px] inline-block'>
                                <Link to='' className="subnav-item" >Tìm Theo Tâm Trạng</Link>
                            </li>
                        </ul>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='' className='navLink'>Mâm đĩa</NavLink>
                </li>
                <li>
                    <NavLink to='' className='navLink'>Cho người mới</NavLink>
                </li>
                <li>
                    <NavLink to='' className='navLink'>Blog</NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default NavLinks