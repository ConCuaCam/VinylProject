import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube, BsSpotify } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import confirm1 from '../../assets/img/svgexport-3.svg'
import confirm2 from '../../assets/img/svgexport-4.svg'
import confirm3 from '../../assets/img/svgexport-5.svg'
import confirm4 from '../../assets/img/svgexport-6.svg'

function Content() {
    const confirm = [
        {
          title: 'NHẬN ĐẶT ĐĨA RIÊNG THEO YÊU CẦU',
          desc: 'Tìm hiểu thêm',
          img: confirm1
        },
    
        {
          title: 'FREESHIP ĐƠN HÀNG ĐĨA TỪ 2 TRIỆU ĐỒNG',
          desc: 'Tìm hiểu thêm',
          img: confirm2
        },
    
        {
          title: 'ĐĨA ĐƯỢC BẢO QUẢN CHU ĐÁO',
          desc: 'Tìm hiểu thêm',
          img: confirm3
        },
    
        {
          title: 'VẬN CHUYỂN AN TOÀN, TRÁNH HƯ HẠI ĐĨA',
          desc: 'Tìm hiểu thêm',
          img: confirm4
        }
      ]
    return (
        <>
            <div className="wrap-button mb-5">
                <Link to='/allvinyl' className='link-btn hover:underline md:text-[15px] text-[11px] transition-all duration-200'>khám phá danh sách đĩa than của vọc</Link>
            </div>
            <div className="wrap-links py-12 w-full">
                <div className="max-w-[1160px] px-5">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div className="p-2.5 md:text-right text-center">
                            <span className='text-[15px]'>Theo dõi VỌC RECORDS trên:</span>
                        </div>
                        <div className="p-2.5">
                            <ul className='flex gap-4 justify-center md:justify-start'>
                                <li>
                                    <Link to='https://www.facebook.com/vocrecords.vn/' className='text-[#818A91]' target="_blank">
                                        <BsFacebook className='text-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.instagram.com/vocrecords.vn/' className='text-[#818A91]' target="_blank">
                                        <BsInstagram className='text-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.tiktok.com/@vocrecords.vn' className='text-[#818A91]' target="_blank">
                                        <BsTiktok className='text-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.youtube.com/channel/UCcU5TObWmxHLA308cupIJOQ' className='text-[#818A91]' target="_blank">
                                        <BsYoutube className='text-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.youtube.com/channel/UCcU5TObWmxHLA308cupIJOQ' className='text-[#818A91]' target="_blank">
                                        <BsSpotify className='text-[20px]' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-confirm w-full">
                <div className="mb-5">
                    <h4 className='text-[20px] font-bold'>VỌC RECORDS CAM KẾT</h4>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    {confirm.map((item, index) => (
                        <div className='p-2.5' key={index}>
                            <div className="p-[15px] border border-[#A2A9B0] flex">
                                <div className="mr-4">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h5 className='text-[14px] font-bold mb-1'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content