import React from 'react'
import styled from 'styled-components'

const product = ({id, title, image, price}) => {
  return (
    <Wrapper>
      
      <img src={image} alt={id} />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <p>{title.substr(0, 16)+'...'}</p>
        <p>${price.toFixed(2)}</p>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 20px;
  img {
    width: 100%;
    height: 200px;
    object-fit: scale-down;
  }
`

export default product