import React, { useState } from 'react'
import RegisterTemp from '../template/Register'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [conPasswordError, setConPasswordError] = useState('');
    const [FormError, setFormError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate()

    const handleUsernameChange = (e) => {
        setFormError("");
        const value = e.target.value;
        if (value.trim() === "") {
            setUsernameError("Yêu cầu tên tài khoản.");
            setIsFormValid(false);
        } else if (value.length <= 7) {
            setUsernameError('Tên tài khoản phải có ít nhất 8 ký tự.');
            setIsFormValid(false);
        } else {
            setUsernameError("");
            setIsFormValid(password !== "" && true);
        }
        setUsername(value);
    };

    const handlePasswordChange = (e) => {
        setFormError("");
        const value = e.target.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
            setPasswordError('Mật khẩu phải có ít nhất 8 ký tự và chứa cả chữ cái và số.');
            setIsFormValid(false);
        } else {
            setPasswordError("");
            setIsFormValid(username !== "" && true);
        }
        setPassword(value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConPasswordError('Mật khẩu và xác nhận mật khẩu không khớp');
            setIsFormValid(false);
        } else {
            setConPasswordError("");
            setIsFormValid(username !== "" && password !== "" && true);
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (username === "" && password === "" && confirmPassword === "") {
            setUsernameError("Yêu cầu tên tài khoản.");
            setPasswordError("Mục nhập mật khẩu trống.");
            setConPasswordError("Vui lòng nhập lại mật khẩu");
        } else if (username === "") {
            setUsernameError("Yêu cầu tên tài khoản.");
        } else if (password === "") {
            setPasswordError("Mục nhập mật khẩu trống.");
        } else if (confirmPassword === "") {
            setConPasswordError("Vui lòng nhập lại mật khẩu");
        } else if (!isFormValid) {
            setFormError("");
        } else {
            handleRegister();
        }
    };

    const registerUser = {
        username: username,
        password: password,
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        address: "",
        phone: "",
    }
    const handleRegister = async (e) => {
        // Kiểm tra xem username đã tồn tại hay chưa bằng cách gửi yêu cầu GET trước
        const response = await axios.get(
            'https://64532271c18adbbdfe95f5c6.mockapi.io/users'
        );

        // Kiểm tra xem username đã tồn tại trong danh sách người dùng hay chưa
        const isUsernameExists = response.data.some(
            (user) => user.username === username
        );

        if (isUsernameExists) {
            // Username đã tồn tại, hiển thị thông báo lỗi
            setFormError('Username đã tồn tại, vui lòng thử lại');
        } else {
            // Username chưa tồn tại, gửi yêu cầu POST để tạo tài khoản mới
            await axios.post('https://64532271c18adbbdfe95f5c6.mockapi.io/users', registerUser);
            // Đăng ký thành công, thực hiện các hành động khác, ví dụ: chuyển hướng trang
            toast.success('Đăng ký tài khoản thành công', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/login')
        }
    };

    return (
        <RegisterTemp
            usernameError={usernameError}
            PasswordError={PasswordError}
            FormError={FormError}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            confirmPassword={confirmPassword}
            conPasswordError={conPasswordError}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            handleRegisterSubmit={handleRegisterSubmit}
        />
    )
}

export default Register