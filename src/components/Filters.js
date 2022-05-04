import React from 'react'
import { useFilterContext } from '../context/filter_context'
import {getValues} from '../helper/helper'
import styled from 'styled-components'

const Filter = () => {
  const {
    filters: {
      text,
      category,
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext()

  const categories = getValues(all_products, 'category')
  
  return (
    <Wrapper>
      <form onSubmit={(e) => e.prefentDefault()}>
        <div>
          <input type="text"
                 name="text"
                 placeholder='search products'
                 value={text}
                 onChange={updateFilters}
          />
        </div>

        <div>
          <h4>Categories</h4>
          <div className='btn-container'>
            {categories.map((cat, index) => {
              return <button 
                        key={index} 
                        name="category"
                        type="button"
                        onClick={updateFilters}
                        className={`${category === cat ? 'btn hot' : 'btn'}`}
                    >
                        {cat}
                  </button>
            })}
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  input[type="text"]{
    font-family: inherit;
    font-size: 1rem;
    padding: .25rem;
    text-indent: 5px;
  }

  .btn-container {
    padding-top: 1.5em;
    display: grid;
    font-family: inherit;
  }
  .btn {
    color: gray;
    font-size: 1.25rem;
    text-align: left;
    margin: .25em 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  .btn:hover {
    color: black;
  }
  h4 {
    padding-top: 1.5em;
  }
  .hot {
    color: black;
    /* border: none;
    text-align: left;
    font-size: 1.25rem; */
  }

`
export default Filter