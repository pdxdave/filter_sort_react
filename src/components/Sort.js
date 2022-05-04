import React from 'react'
import styled from 'styled-components'
import {useFilterContext} from '../context/filter_context'

const Sort = () => {
  const {
    sort,
    updateSort
  } = useFilterContext()


  return (
    <Wrapper>
      {/* <h3>Sort</h3>
      <hr /> */}
      <form>
        <label htmlFor="sort"> Sort By</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  )
}


const Wrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  hr {
  border: 0;
  margin: 0 10px;
  clear:both;
  display:block;
  width: 80%;               
  background-color: gray;
  height: 1px;
}

  label {
    font-family: inherit;
    font-size: 1.2rem;
    margin-right: 5px;
    display: inline-block;
  }
  select {
    font-size: 1.2rem;
  }
  
`


export default Sort