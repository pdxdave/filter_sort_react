import React, {useContext, useEffect, useReducer} from 'react'
import reducer from '../reducers/filter_reducer'
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    UPDATE_FILTERS,
    CLEAR_FILTERS,
} from '../actions'

import { useProductsContext } from './products_context'

const initialState = {
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest',
    filters: {
        text: '',
        category: 'all'
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    // gets products from products_context
    const {products} = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // each time products changes, this runs and loads the products
    useEffect(() => {
        dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])


    // when either sort or filters changes, products also changes
    // which calls this useEffect to run
    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS})
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort, state.filters])

    // SORT PRODUCTS BY PRICE & ALPHABETIC
    const updateSort = (e) => {
        const value = e.target.value 
        dispatch({type: UPDATE_SORT, payload: value})
    }

    // FILTER SORTING 
    const updateFilters = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        if(name === 'category'){
            value = e.target.textContent
        }
        dispatch({type: UPDATE_FILTERS, payload: {name, value}})
    }

    return <FilterContext.Provider value={{
        ...state,
        updateSort,
        updateFilters
        
        
    }}>
            {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}