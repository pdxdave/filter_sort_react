import React from 'react'
import GridView from './GridView'
import { useFilterContext } from '../context/filter_context'

const ProductList = () => {
  const {filtered_products: products} = useFilterContext()
  return (
    <GridView products={products}/>
  )
}

export default ProductList