import React from 'react'
import LoginLogo from '../../assets/img/admin-logo.png'
import { Link } from 'react-router-dom'

function Register({
    username,
    password,
    confirmPassword,
    usernameError,
    PasswordError,
    conPasswordError,
    FormError,
    handleUsernameChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
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
                                        <div className="w-full flex justify-center items-center flex-col gap-5">
                                            <img src={LoginLogo} alt="" className='w-[70%]' />
                                            <p className='font-secondary text-[20px] font-light'>Đã có tài khoản? <Link to='/login' className="text-color-pink font-normal">Đăng nhập</Link></p>
                                        </div>
                                    </div>
                                    <div className="px-2.5">
                                        <h2 className='py-2.5 mb-2 text-[18px] uppercase'>đăng ký</h2>
                                        <form action="" className='mt-2' onSubmit={handleRegisterSubmit}>
                                            <p className='mb-[15px] block'>
                                                <label htmlFor="username" className='mb-2 block'>Tên tài khoản <span className='text-color-red'>*</span></label>
                                                <input type="text" value={username} onChange={handleUsernameChange} className='max-w-[300px] text-[#777] w-full border border-[#ccc] py-2 px-3 text-[14px] outline-none' />
                                            </p>
                                            {usernameError && <div className='mb-2 text-color-red'>{usernameError}</div>}

                                            <p className='mb-[15px] block'>
                                                <label htmlFor="password" className='mb-2 block'>Mật khẩu <span className='text-color-red'>*</span></label>
                                                <input type="password" value={password} onChange={handlePasswordChange} className='max-w-[300px] text-[#777] w-full border border-[#ccc] py-2 px-3 text-[14px] outline-none' />
                                            </p>

                                            {PasswordError && <div className='mb-2 text-color-red'>{PasswordError}</div>}

                                            <p className='mb-[15px] block'>
                                                <label htmlFor="repassword" className='mb-2 block'>Nhập lại mật khẩu <span className='text-color-red'>*</span></label>
                                                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className='max-w-[300px] text-[#777] w-full border border-[#ccc] py-2 px-3 text-[14px] outline-none' />
                                            </p>
                                            {conPasswordError && <div className='mb-2 text-color-red'>{conPasswordError}</div>}

                                            <button type='submit' className='uppercase bg-color-primary text-white py-2 px-3 mt-1'>đăng ký</button>
                                        </form>
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

export default Register