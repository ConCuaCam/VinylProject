import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import LoginLogo from '../../assets/img/admin-logo.png'
import { Link } from 'react-router-dom'
function Index({
  email,
  password,
  EmailError,
  PasswordError,
  handleLoginSubmit,
  handleEmailChange,
  handlePasswordChange,
  FormError,
}) {
  return (
    <div className="main">
      <div className="max-w-[1160px] px-[15px] mx-auto">
        <div className="pb-[30px]">
          <div className="px-2.5">
            {
              FormError && <ul className='bg-[#f6d6d5] text-[#6d1a17] border border-[#f2c6c4] py-2.5 px-[15px] list-disc'>
                <li className='list-inside text-[14px]'>
                  {FormError}
                </li>
              </ul>
            }
            <div className="max-w-[790px] my-[30px] mx-auto border border-[#ececec] text-left">
              <div className="px-[25px] pb-[35px] mt-[30px]">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className="px-2.5">
                    <h2 className='py-2.5 mb-2 text-[18px] uppercase'>đăng nhập</h2>
                    <div className="inline-grid grid-cols-[minmax(145px,auto)] py-[5px]">
                      <div className="flex leading-[33px] items-center border-2 border-black rounded-[4px] cursor-pointer">
                        <div className="p-2">
                          <FcGoogle className='h-6 w-6' />
                        </div>
                        <div className="mr-6 ml-3 py-2.5 leading-5 text-center">Continue with Google</div>
                      </div>
                    </div>
                    <form action="" className='mt-2' onSubmit={handleLoginSubmit}>
                      <p className='mb-2 block'>
                        <label htmlFor="email" className='mb-2 block'>Tên tài khoản hoặc địa chỉ email <span className='text-color-red'>*</span></label>
                        <input type="text" value={email} id="email" onChange={handleEmailChange} className='max-w-[300px] text-[#777] w-full border border-[#ccc] py-2 px-3 text-[14px] outline-none' />
                      </p>
                      {EmailError && <div className='mb-2 text-color-red'>{EmailError}</div>}

                      <p className='mb-2 block'>
                        <label htmlFor="password" className='mb-2 block'>Mật khẩu <span className='text-color-red'>*</span></label>
                        <input type="password" id="repassword" value={password} onChange={handlePasswordChange} className='max-w-[300px] text-[#777] w-full border border-[#ccc] py-2 px-3 text-[14px] outline-none' />
                      </p>
                      {PasswordError && <div className='mb-2 text-color-red'>{PasswordError}</div>}

                      <button type='submit' className='uppercase bg-color-primary text-white py-2 px-3 mb-3 mt-1'>đăng nhập</button>
                    </form>
                  </div>
                  <div className="px-2.5">
                    <div className="w-full flex justify-center items-center flex-col gap-5">
                      <img src={LoginLogo} alt="" className='w-[70%]' />
                      <p className='font-secondary text-[20px] font-light'>Chưa có tài khoản? <Link to='/register' className="text-color-pink font-normal">Đăng ký</Link></p>
                    </div>
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

export default Index