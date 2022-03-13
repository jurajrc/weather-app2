import React  from 'react'
import { Link } from 'react-router-dom'
import places_black from '../images/places_black.svg'
// Style
import styled from 'styled-components'
import { theme } from '../components/Theme'
// Animation
import { motion } from 'framer-motion'


const SearchForm = ({ 
  hadleFilter, 
  findTowns, 
  setLocation, 
  handleOnClick 
}) => {


  return (
    <StyleSearch 
      animate={{opacity: 1, y: '0%'}}
      initial={{opacity: 0, y: '100%'}}
      exit={{opacity: 0, y: '100%'}}
      transition={{ duration: 0.5 }}
    >

        <p className='title'>Location</p>

        <form onSubmit={e => e.preventDefault()}>
          <input 
            type="text"
            placeholder='Search city...'
            onChange={hadleFilter}
            
          />
          <img src={places_black} alt="places" />
        </form>

        <ul className='my-towns'>
          {findTowns.map((item, index) => (
            <li 
              key={index} 
              onClick={() => {setLocation(item.town); handleOnClick() }} >
                <Link 
                  to="/"  ><p className='town'>{item.town}</p> <span className='temp'>{item.temp}°C</span> 
                </Link>
            </li>
          ))}  
        </ul> 

      </StyleSearch>
  )
}
const StyleSearch = styled(motion.section)`
    width: 100%;
    min-height: 94vh;
    background-color: #fff;
    box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 6vh;
    border-radius: 1em 1em 0 0;
    overflow: hidden;

    .title {
        color: ${theme.lightPrimariFontColor};
        text-align: center;
        padding: 28px 0;
    }
    form {
        position: relative;
        margin-bottom: 2em;
        input {
            font-style: italic;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            padding: 0.6em;
            width: 90%;
            margin: 0 5%;
            border: none;
            border-radius: 4px;
            background: #F3F3F3;
            color: #9F9F9F;
            outline: none;
        }
        img {
            position: absolute;
            top: 50%;
            right: 10%;
            transform: translateY(-50%);
        }
    }
    .my-towns {
      padding: 0 2.2em;
      color: #444;

      li {
        a {
          font-size: 1.125em;
          font-weight: 400;
          letter-spacing: -0.05em;
          width: 100%;
          padding: 0.45em 0;
          display: flex;
          justify-content: space-between;
          color: #666;

          .town {
            color: #444;
          }
          .temp {
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: 0em;
          }
        }
      }
    }
`

export default SearchForm