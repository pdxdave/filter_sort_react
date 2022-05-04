import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    UPDATE_FILTERS
} from '../actions'

const filter_reducer = (state, action) => {

    // LOAD PRODUCTS
    // we need both. thing of all as a base, and filtered as the one that changes
    if(action.type === LOAD_PRODUCTS){
        return {
            ...state,
            all_products:[...action.payload],
            filtered_products:[...action.payload]
        }
    }

    // UPDATE SORT
    if(action.type === UPDATE_SORT){
        return {...state, sort: action.payload}
    }

    // SORTING PRODUCTS
    if(action.type === SORT_PRODUCTS){
        const {sort, filtered_products} = state 
        let tempProducts = [...filtered_products]
        if(sort === 'price-lowest'){
            tempProducts = tempProducts.sort((a, b) => a.price - b.price)
        }
        if(sort === 'price-highest'){
            tempProducts = tempProducts.sort((a, b) => b.price - a.price)
        }
        if(sort === 'name-a'){
            tempProducts = tempProducts.sort((a, b) => {
              return a.title.localeCompare(b.title)
            })
          }
        if(sort === 'name-z'){
            tempProducts = tempProducts.sort((a, b) => {
                return b.title.localeCompare(a.title)
            })
        }
        return {...state, filtered_products: tempProducts}
    }


    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload 
        return {
            ...state,
            filters: {...state.filters, [name]: value}
        }
    }

    // FILTERING PRODUCTS
    if(action.type === FILTER_PRODUCTS){
        // start with a clean slate of all the products
        const {all_products} = state
        // objects to filter
        const {text, category} = state.filters
        // if something goes wrong, this will return all the products
        let tempProducts = [...all_products]
        // text search
        if(text){
            tempProducts = tempProducts.filter((product) => {
                return product.title.toLowerCase().startsWith(text)
            })
        }
        if(category !== 'all'){
            tempProducts = tempProducts.filter(product => product.category === category)
        }
        return {...state, filtered_products: tempProducts}
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer