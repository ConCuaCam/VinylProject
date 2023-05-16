const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.discountPrice)
            let maxPrice = Math.max(...priceArr)
            let minPrice = Math.min(...priceArr)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters, maxPrice: maxPrice, price: maxPrice, minPrice: minPrice}
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];
            if (sorting_value === "#") {
                newSortData = tempSortProduct; // Sử dụng mảng ban đầu nếu sorting_value === "#"
              } else {
                const sortingProducts = (a, b) => {
                  if (sorting_value === "lowest") {
                    return a.discountPrice - b.discountPrice;
                  }
              
                  if (sorting_value === "highest") {
                    return b.discountPrice - a.discountPrice;
                  }
              
                  if (sorting_value === "increase") {
                    return a.releaseYear - b.releaseYear;
                  }
              
                  if (sorting_value === "decrease") {
                    return b.releaseYear - a.releaseYear;
                  }
                };
                newSortData = tempSortProduct.sort(sortingProducts);
              }

            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name] : value, 
                },
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state ;
            let tempFilterProduct = [...all_products]

            const { text , genre, situation, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.title.toLowerCase().includes(text.toLowerCase()) || curElem.artist.toLowerCase().includes(text.toLowerCase())
                })  
            }

            if(genre !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.genre.includes(genre);
                });
            }

            if(situation !== "all") {
                if(situation === "conhang") {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                        return curElem.quantity > 0;
                    })
                } 
                if(situation === "hethang") {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                        return curElem.quantity === 0;
                    })
                }
            }

            if (price) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.discountPrice <= price
                });
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        default:
            return state
    }
};

export default filterReducer