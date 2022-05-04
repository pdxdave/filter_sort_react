import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'

const GridView = ({products}) => {
  const {products_loading} = useProductsContext()

  if(products_loading){
    return <Loading className="loading"/>
  }
  return (
    <Wrapper>
      {products.map((product) => {
        return   <Product key={product.id} {...product}/>
      })}
    
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
`

export default GridView