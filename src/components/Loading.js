import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
        <div className='loading'>
            <h2>Hold on to your panties...looking for the product</h2>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 1100px;
    max-width: 100%;
    margin: 0 auto;

    text-align: center;
    margin-top: 200px;
`

export default Loading