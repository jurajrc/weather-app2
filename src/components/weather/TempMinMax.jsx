import React from 'react'
// style
import styled from 'styled-components'
import arrow from '../../images/miniArrow.svg'
const TempMinMax = ({ max, min }) => {
  return (
    <StyleMinMax>
      <div className="max">
        <p>{max}°C  </p>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="min">
        <p>{min}°C</p>
        <img src={arrow} alt="arrow" />
      </div>
    </StyleMinMax>
  )
}
const StyleMinMax = styled.article`
    width: 33%;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    //border: 1px solid #000;
    padding-right: 12%;
    color: #666;

    .max,
    .min {
      display: flex;
      img {
        transform: scale(1.1);
        margin-left: 2px;
      }
    }
    .max {
      img {
        transform: translateY(-1px);
      }
    }
    .min {
      img {
        transform: rotate(180deg) translateY(-2.5px);
      }
    }

`

export default TempMinMax