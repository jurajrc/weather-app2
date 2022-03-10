import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// Style
import styled from 'styled-components'
import places_blue from '../images/places-blue.svg'
import { theme } from '../components/Theme'
// units
import { sunn, replaceComma, msTokmh, dayTime } from '../units'
import moment from 'moment'
import { coordsTown } from '../coordsTown'

const Home = ({ coord, foundData, setFindTowns }) => {

    useEffect(() => {
      setFindTowns(coordsTown)
    },[])

  return (
    <StyleHome>
        <header>
            <div className="date">
                <p>{moment().format('dddd, D MMM YYYY | h:mm A')}</p>
            </div>

            {coord && (
            <div className="coord">
            <Link to="/search">{coord.name}, Slovakia</Link>
            <img src={places_blue} alt="places" />
            </div>
            )}
        </header>

        <div className="results-weather">
            {foundData && 
                <div className="foundData">
                <img src={`http://openweathermap.org/img/wn/${foundData.current.weather[0].icon}@2x.png`} alt="icon" /> 
                <p className="description">{foundData.current.weather[0].description}</p>
                <div className="temp" style={{display: 'flex'}}><h1 style={{margin: 0}}>{replaceComma(foundData.current.temp, '.', ',')}</h1>°C</div>

                <p>Humidity-Vlhkosť {foundData.current.humidity}%</p>
                <p>Pressure {replaceComma(foundData.current.pressure / 1000, '.', ',')}mBar</p>
                <p>Wind-vietor {msTokmh(foundData.current.wind_speed)} km/h</p>

                <p>Východ slnka {sunn(foundData.current.sunrise)}</p>  
                <p>Západ slnka {sunn(foundData.current.sunset)}</p>
                
                <p>Daytime {dayTime(foundData.current.sunset, foundData.current.sunrise)}</p>
                </div>
            }
        </div>
    </StyleHome>
  )
}
const StyleHome = styled.section`
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
    position: relative;
    top: -1.7em;
    border-radius: 1em 1em 0 0;
    overflow: hidden;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .date {
            font-size: 0.875em;
            color: ${theme.lightPrimariFontColor};
            margin-left: 0.4em;
        }
        .coord {
            display: flex;
            align-items: center;
            background: rgba(13, 159, 234, 0.08);
            padding: 0.4em;
            border-radius: 0 1em 0 1em;
;
            a {
                color: ${theme.lightLinkFontcolor};
                padding: 0.6em 0;
            }
            img {
                margin: 0 0.6em;
            }
        }
    }
`


export default Home