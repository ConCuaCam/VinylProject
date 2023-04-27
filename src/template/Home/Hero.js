import React from 'react'
import bannerLeft from '../../assets/img/banner-left.png'
import bannerRight from '../../assets/img/banner-right.png'
import flag from '../../assets/img/vietnam.png'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { FaMusic, FaCompactDisc } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section>
            <div className="flex">
                <div className="flex w-[50%]">
                    <div className="pt-12 flex-1 max-w-full text-right">
                        <div className="mb-5">
                            <div className="mr-5">
                                <h3>
                                    <Link to='' className='text-[21px] md:text-[25px] font-extrabold hover:underline'>
                                        Đĩa mới
                                        <IoChevronForwardSharp className='inline-block ml-1 mb-[5px]' />
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="mb-10 hidden md:block">
                            <div className="mr-5">
                                <p className='leading-[1.4]'>Đĩa than nguyên seal mới toanh <br />
                                    của bạn và chỉ riêng bạn</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="mr-5">
                                <Link to='' className='link-btn hover:underline md:text-[15px] text-[11px] transition-all duration-500'>
                                    <FaMusic className='inline-block mr-1 mb-[5px]' />
                                    Đĩa mới có sẵn
                                </Link>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="mr-5">
                                <Link to='' className='link-btn bg-[#FFF27E] hover:underline md:text-[15px] text-[11px] transition-all duration-500'>
                                    Xem toàn bộ kho đĩa
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img src={bannerLeft} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex w-[50%] bg-[#dde1e6]">
                    <div className="pt-12 flex-1 max-w-full">
                        <div className="mb-5">
                            <div className="ml-5">
                                <h3>
                                    <Link to='' className='text-[21px] md:text-[25px] font-extrabold hover:underline'>
                                        Đĩa vintage
                                        <IoChevronForwardSharp className='inline-block ml-1 mb-[5px]' />
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="mb-10 hidden md:block">
                            <div className="ml-5">
                                <p className='leading-[1.4]'>Những chiếc đĩa than vượt năm tháng để đưa <br />
                                    giai điệu nguyên bản tới đôi tai bạn</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="ml-5">
                                <Link to='' className='link-btn hover:underline bg-white md:text-[15px] text-[11px] transition-all duration-500'>
                                    <img src={flag} alt="" className='inline-block mr-1 mb-[2px]'/>
                                    Đĩa than Việt Nam
                                </Link>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="ml-5">
                                <Link to='' className='link-btn bg-[#E53B3B] hover:underline md:text-[15px] text-[11px] transition-all duration-500'>
                                    <FaCompactDisc className='inline-block mr-1 md:mb-[5px] mb-[3px]' />
                                    Đĩa vintage sale-off
                                </Link>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={bannerRight} alt="" className='max-h-[276px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero