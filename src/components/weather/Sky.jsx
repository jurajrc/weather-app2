import React from 'react'
// style
import styled from 'styled-components'

const Sky = ({ img, main }) => {
  return (
    <StyleSky>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
        <p>{main}</p>
    </StyleSky>
  )
}
const StyleSky = styled.article`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //border: 1px solid #000;
    img {
        filter: grayscale(1);
    }
    p {
      font-size: 1.125em;
      font-weight: 500;
      position: relative;
      top: -1.4em;
      letter-spacing: -0.05em;
    }
`

export default Sky