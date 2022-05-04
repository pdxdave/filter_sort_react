import React from 'react'
import styled from 'styled-components'
import Filters from '../components/Filters'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

const ProductPage = () => {
  return (
   <Wrapper>

     <Filters />
     <div>
        <Sort />
        <ProductList />
     </div>
    
  </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1170px;
  max-width: 100%;
  margin: 50px auto;

  display: grid;
  grid-template-columns: 200px 1fr;
`

export default ProductPage