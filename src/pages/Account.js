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

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const updatedUser = {
            firstName,
            lastName,
            email,
            address,
            city,
            phone,
        };

        if (currentPassword && newPassword) {
            // Kiểm tra xem currentPassword có trùng với mật khẩu hiện tại hay không
            if (currentPassword === user.password) {
                updatedUser.password = newPassword;
            } else {
                // Hiển thị thông báo lỗi nếu currentPassword không trùng khớp
                toast.error('Mật khẩu của bạn không chính xác.', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }
        }
        if (currentPassword === "" && newPassword === "") {
            setErrorMessage("Vui lòng điền đủ các ô mật khẩu.");
        } else if (currentPassword === "") {
            setErrorMessage("Vui lòng nhập mật khẩu hiện tại của bạn.");
        } else if (newPassword === "") {
            setErrorMessage("Vui lòng nhật mật khẩu mới.");
        } else if (currentPassword === newPassword) {
            setErrorMessage('Mật khẩu hiện tại và mật khẩu mới không được giống nhau');
            return;
        }

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
        } catch (error) {
            console.error('Lỗi cập nhật thông tin:', error);
        }
    };
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
        />
    )
}

export default Account