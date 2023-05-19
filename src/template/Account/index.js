import React from 'react'
import { Link } from 'react-router-dom'
function Account({
    setLogout,
    firstName,
    lastName,
    email,
    address,
    city,
    phone,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setCity,
    setPhone,
    newPassword,
    currentPassword,
    errorMessage,
    handleUpdateSubmit,
    curPasswordError,
    newPasswordError,
    handleCurPasswordChange,
    handleNewPasswordChange
}) {
    return (
        <div className="main">
            <div className="max-w-[1160px] px-[15px] mx-auto">
                <div className="pb-[30px]">
                    <div className="px-2.5">
                        {
                            errorMessage && <ul className='bg-[#f6d6d5] text-[#6d1a17] border border-[#f2c6c4] py-2.5 px-[15px] list-disc'>
                                <li className='list-inside text-[14px]'>
                                    {errorMessage}
                                </li>
                            </ul>
                        }
                        <div className="flex gap-7 lg:flex-row flex-col">
                            <div className="lg:w-[23%] w-full">
                                <nav className='pb-[30px] mt-[30px] uppercase'>
                                    <ul className='mb-4'>
                                        <li>
                                            <span className='py-[15px] pl-2.5 border-b border-[#ccc] hover:bg-[#eee] cursor-pointer block font-bold underline text-[#697077]'>thông tin tài khoản</span>
                                        </li>
                                        <li>
                                            <Link className='py-[15px] pl-2.5 text-color-primary border-b border-[#ccc] hover:bg-[#eee] cursor-pointer block' to='/wishlist'>
                                                wishlist
                                            </Link>
                                        </li>
                                        <li>
                                            <span onClick={setLogout} className='py-[15px] pl-2.5 text-color-primary border-b border-[#ccc] hover:bg-[#eee] cursor-pointer block'>thoát</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex-1">
                                <div className="mt-[30px] border border-[#ececec] border-t-0">
                                    <div className="pt-[30px] pb-2.5 px-5 mt-[30px] border-t border-[#999] font-primary">
                                        <form action="" className='block overflow-auto' onSubmit={handleUpdateSubmit}>
                                            <p className='float-left sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="firstname" className='mb-2 block'>First Name <span className='text-color-red'>*</span></label>
                                                <input type="text" onChange={(e) => setFirstName(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="firstname" id="firstname" value={firstName} />
                                            </p>
                                            <p className='float-right sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="lastname" className='mb-2 block'>Last Name <span className='text-color-red'>*</span></label>
                                                <input type="text" onChange={(e) => setLastName(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="lastname" id="lastname" value={lastName} />
                                            </p>
                                            <p className='float-left sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="address" className='mb-2 block'>Địa chỉ <span className='text-color-red'>*</span></label>
                                                <input type="text" onChange={(e) => setAddress(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="address" id="address" value={address} />
                                            </p>
                                            <p className='float-right sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="email" className='mb-2 block'>Email address <span className='text-color-red'>*</span></label>
                                                <input type="text" onChange={(e) => setEmail(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="email" id="email" value={email} />
                                            </p>
                                            <p className='float-right sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="city" className='mb-2 block'>Tỉnh/Thành Phố <span className='text-color-red'>*</span></label>
                                                <input type="text" onChange={(e) => setCity(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="city" id="city" value={city} />
                                            </p>
                                            <p className='float-left sm:w-[48%] w-full mb-[15px] leading-normal'>
                                                <label htmlFor="phone" className='mb-2 block'>Số điện thoại <span className='text-color-red'>*</span></label>
                                                <input type="number" onChange={(e) => setPhone(e.target.value)} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="phone" id="phone" value={phone} />
                                            </p>
                                            <div className="mt-[30px]">
                                                <p className='uppercase font-bold text-[17px] mt-4 mb-2 tracking-tight'>Password change</p>
                                                <p className='mb-[15px] leading-normal'>
                                                    <label htmlFor="currentPassword" className='mb-2 block'>Current Password (leave blank to leave unchanged) <span className='text-color-red'>*</span></label>
                                                    <input type="password" value={currentPassword} onChange={handleCurPasswordChange} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="currentPassword" id="currentPassword" />
                                                </p>
                                                {curPasswordError && <div className='mb-2 text-color-red'>{curPasswordError}</div>}
                                                <p className='mb-[15px] leading-normal'>
                                                    <label htmlFor="newPassword" className='mb-2 block'>New Password (leave blank to leave unchanged)<span className='text-color-red'>*</span></label>
                                                    <input type="password" value={newPassword} onChange={handleNewPasswordChange} className='py-2 px-3 border border-[#ccc] max-w-[300px] text-[#777] w-full outline-none' name="newPassword" id="newPassword" />
                                                </p>
                                                {newPasswordError && <div className='mb-2 text-color-red'>{newPasswordError}</div>}
                                            </div>
                                            <p className='mb-5'>
                                                <button className='uppercase text-white px-3 py-2 bg-color-primary text-[14px] leading-normal border border-[#222]'>save changes</button>
                                            </p>
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

export default Account