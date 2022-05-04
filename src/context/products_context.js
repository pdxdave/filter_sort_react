import React from 'react'
import {useEffect, useContext, useReducer} from 'react'
import axios from 'axios'
import reducer from '../reducers/product_reducer';

import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from '../actions'

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {}
}

const ProductsContext = React.createContext()
const url = 'https://fakestoreapi.com/products'

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // GET THE PRODUCTS
    const fetchProducts = async (url) => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url)
            const products = await response.data 
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
            dispatch({type: GET_PRODUCTS_ERROR})
        }
    }

    useEffect(() => {
        fetchProducts(url)
    }, [])


    return <ProductsContext.Provider value={{
                ...state,
            }}>

                {children}

        </ProductsContext.Provider>

}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}