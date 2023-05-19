import React, { useContext, useState } from 'react'
import AccountTemp from '../template/Account'
import Loading from '../components/Loading/index'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../context/AuthContext'

function Account() {
    const { isLoading, user, setLogout, isLogin, setLogin } = useContext(AuthContext);
    const [firstName, setFirstName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [email, setEmail] = useState(user.email || '');
    const [address, setAddress] = useState(user.address || '');
    const [city, setCity] = useState(user.city || '');
    const [phone, setPhone] = useState(user.phone || '');
    const [isFormValid, setIsFormValid] = useState(false);


    const [currentPassword, setCurrentPassword] = useState('');
    const [curPasswordError, setCurPasswordError] = useState('')
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const updatedUser = {
        firstName,
        lastName,
        email,
        address,
        city,
        phone,
    };

    const handleCurPasswordChange = (e) => {
        setErrorMessage("");
        const value = e.target.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (value.trim() === "") {
            setCurPasswordError("");
        }
        else if (!passwordRegex.test(value)) {
            setCurPasswordError('Mật khẩu phải có ít nhất 8 ký tự và chứa cả chữ cái và số.');
            setIsFormValid(false);
        } else {
            setCurPasswordError("");
            setIsFormValid(newPassword !== "" && true);
        }
        setCurrentPassword(value);
    };

    const handleNewPasswordChange = (e) => {
        setErrorMessage("");
        const value = e.target.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (value.trim() === "") {
            setNewPasswordError("");
        }
        else if (!passwordRegex.test(value)) {
            setNewPasswordError('Mật khẩu phải có ít nhất 8 ký tự và chứa cả chữ cái và số.');
            setIsFormValid(false);
        } else {
            setNewPasswordError("");
            setIsFormValid(currentPassword !== "" && true);
        }
        setNewPassword(value);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (!currentPassword && !newPassword) {
            handleUpdateProfile()
            setCurPasswordError("")
            setNewPasswordError("")
        } else if (!currentPassword || !newPassword) {
            // Nếu chỉ có một trong hai ô trống
            setErrorMessage('Vui lòng điền cả ô mật khẩu hiện tại và mật khẩu mới');
        } else if (currentPassword !== user.password) {
            // Nếu currentPassword không khớp với mật khẩu hiện tại của người dùng
            setErrorMessage('Mật khẩu hiện tại của bạn không chính xác.');
        } else if (currentPassword === newPassword) {
            // Nếu currentPassword giống với newPassword
            setErrorMessage('Mật khẩu hiện tại và mật khẩu mới không được giống nhau');
        } else if (!isFormValid) {
            setErrorMessage("");
        } else {
            // Xử lý logic cập nhật thông tin người dùng và mật khẩu
            updatedUser.password = newPassword;
            handleUpdateProfile()
            setCurPasswordError("")
            setNewPasswordError("")
        }
    };

    const handleUpdateProfile = async () => {
        // Gửi yêu cầu cập nhật thông tin người dùng
        try {
            const response = await axios.put(
                `https://64532271c18adbbdfe95f5c6.mockapi.io/users/${user.id}`,
                updatedUser
            );

            setLogin(response.data)
            // Cập nhật thông tin người dùng trong state

            // Hiển thị thông báo cập nhật thành công
            toast.success('Thông tin tài khoản đã được cập nhật', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCurrentPassword("");
            setNewPassword("");
            setErrorMessage("");
        } catch (error) {
            console.error('Lỗi cập nhật thông tin:', error);
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (!isLogin) {
        return <Navigate to="/login" />;
    }

    return (
        <AccountTemp
            setLogout={setLogout}
            handleUpdateProfile={handleUpdateProfile}
            firstName={firstName}
            lastName={lastName}
            email={email}
            address={address}
            city={city}
            phone={phone}
            newPassword={newPassword}
            currentPassword={currentPassword}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setAddress={setAddress}
            setCity={setCity}
            setPhone={setPhone}
            setCurrentPassword={setCurrentPassword}
            setNewPassword={setNewPassword}
            errorMessage={errorMessage}
            handleUpdateSubmit={handleUpdateSubmit}
            curPasswordError={curPasswordError}
            newPasswordError={newPasswordError}
            handleCurPasswordChange={handleCurPasswordChange}
            handleNewPasswordChange={handleNewPasswordChange}
        />
    )
}

export default Account