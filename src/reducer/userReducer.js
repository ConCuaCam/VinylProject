const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING': 
            return {
                ...state,
                isLoading: true,
            }
        case 'SET_LOGIN':
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                user: action.payload,
            };
        case 'SET_LOGOUT':
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                user: {},
            };
        default:
            return state
    }
};

export default UserReducer