const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_API_DATA":
            const popularData = action.payload.filter((product) => {
                return product.popular === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                popularProducts: popularData,
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
        default:
            return state
    }
};

export default ProductReducer