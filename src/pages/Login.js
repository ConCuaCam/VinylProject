import React, { useState, useContext } from 'react'
import LoginTemp from '../template/Login/Index'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState("");
  const [password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState("");
  const [FormError, setFormError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const { setLogin, isLogin } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setFormError("");
    const value = e.target.value;
    if (value.trim() === "") {
      setEmailError("Yêu cầu tên tài khoản.");
      setIsFormValid(false);
    } else {
      setEmailError("");
      setIsFormValid(password !== "" && true);
    }
    setEmail(value);
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
      setIsFormValid(email !== "" && true);
    }
    setPassword(value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setEmailError("Yêu cầu tên tài khoản.");
      setPasswordError("Mục nhập mật khẩu trống.");
    } else if (email === "") {
      setEmailError("Yêu cầu tên tài khoản.");
    } else if (password === "") {
      setPasswordError("Mục nhập mật khẩu trống.");
    }
    else if (!isFormValid) {
      setFormError("");
    }
    else {
      handleLogin(email, password);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      // Gửi yêu cầu GET tới API và truyền thông tin tài khoản của người dùng
      const response = await axios.get('https://64532271c18adbbdfe95f5c6.mockapi.io/users');
      // Kiểm tra thông tin tài khoản trong response.data
      const matchingUser = response.data.find(user => (user.email === email && user.password === password) || (user.username === email && user.password === password));

      if (matchingUser) {
        // Đăng nhập thành công
        // localStorage.setItem('user', JSON.stringify(matchingUser));
        toast.success('Đăng nhập thành công', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLogin(matchingUser);
      } else {
        // Sai thông tin tài khoản
        setFormError("Rất tiếc, chúng tôi không tìm thấy tài khoản nào có tên tài khoản/email và mật khẩu này. Vui lòng thử lại hoặc tạo một tài khoản mới.");
        console.log('Thông tin tài khoản không chính xác!');
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  if (isLogin) {
    return <Navigate to="/account" />;
  }

  return (
    <LoginTemp
      email={email}
      password={password}
      EmailError={EmailError}
      PasswordError={PasswordError}
      handleLoginSubmit={handleLoginSubmit}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      FormError={FormError}
    />
  )
}

export default Login