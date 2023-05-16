import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { VinylContext } from './VinylContext'
import reducer from '../reducer/filterReducer'

export const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "#",
    filters: {
        text: "",
        genre: "all",
        situation: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }
}

function FilterProvider({ children }) {
    const { products } = useContext(VinylContext)

    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }
    
    //Sắp xếp products
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    //Tìm kiếm products
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS"});
    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider