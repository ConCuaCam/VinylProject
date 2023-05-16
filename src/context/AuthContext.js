import React, { createContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/userReducer'

export const AuthContext = createContext()

const initialState = {
    isLogin: false,
    isLoading: false,
    user: {},
}

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            dispatch({ type: 'SET_LOGIN', payload: JSON.parse(storedUser) });
        }
    }, []);

    // Xử lý đăng nhập
    const setLogin = (user) => {
        dispatch({ type: 'SET_LOADING' })
        // Lưu thông tin đăng nhập vào local storage
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'SET_LOGIN', payload: user });
    };

    // Xử lý đăng xuất
    const setLogout = () => {
        // Xóa thông tin đăng nhập khỏi local storage
        localStorage.removeItem('user');
        dispatch({ type: 'SET_LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ ...state, setLogin, setLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider