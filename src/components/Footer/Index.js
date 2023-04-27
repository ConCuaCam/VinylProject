import React from 'react'
import Logo from '../../assets/img/LogoFooter.png'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <footer className='bg-color-primary text-white'>
      <div className="footer-main">
        <div className="container max-w-[1160px] mx-auto lg:pt-16 pt-8">
          <div className="flex flex-col -mx-2.5 lg:flex-row">
            <div className="flex-1 px-2.5">
              <aside className='mb-5'>
                <Link to='/' >
                  <img src={Logo} alt="" className='mb-2.5'/>
                </Link>
                <span className='text-[13px]'>TRẢI NGHIỆM ÂM NHẠC TỐT HƠN</span>
              </aside>
            </div>
            <div className="flex-1 px-2.5">
              <aside className=''>
                <h3 className='text-[16px] pb-2.5 mb-4 border-b border-[#697077]'>Thông Tin</h3>
                <ul>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>About Us</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Mixtape</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Newsletter</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="flex-1 px-2.5">
            <aside className=''>
                <h3 className='text-[16px] pb-2.5 mb-4 border-b border-[#697077]'>Trợ Giúp</h3>
                <ul>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Giao hàng</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Thanh toán</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Liên Hệ</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Hướng dẫn mua hàng</Link>
                  </li>
                  <li className='w-[50%] inline-block text-[14px] leading-[1.8] float-left py-0.5'>
                    <Link to=''>Chính sách bảo mật</Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pb-5">
        <div className="container max-w-[1160px] mx-auto">
          <div className="lg:pr-2 lg:pt-12 lg:pb-3 py-2.5">
            <p className='text-[14px]'>Copyright 2022 © <strong>VOCRECORDS.</strong> Powered by ...</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Index