import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducer/productReducer'

export const VinylContext = createContext()

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    popularProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}
function VinylProvider({ children }) {
    const [state , dispatch] = useReducer(reducer, initialState)

    const getProducts = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get('https://64532271c18adbbdfe95f5c6.mockapi.io/products');
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({type: "API_ERROR"});
          }
    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR"});
          }
    }

    useEffect(()=> {
        getProducts();
    },[])
    
    return (
        <VinylContext.Provider value={ { ...state, getSingleProduct } }>
            {children}
        </VinylContext.Provider>
    )
}

export default VinylProvider