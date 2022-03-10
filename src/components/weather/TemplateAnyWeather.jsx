import React from 'react'
// style
import { StyleTemplate } from '../Theme/styles'

const TemplateAnyWeather = ({ img, value, description }) => {
  return (
    <StyleTemplate>
        <img src={img} alt="icon" />
        <span>{value}</span>
        <p>{description}</p>
    </StyleTemplate>
  )
}


export default TemplateAnyWeather