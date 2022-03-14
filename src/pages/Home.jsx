import React, { useState } from 'react'
// Components
import Header from '../components/Header'
import Sky from '../components/weather/Sky'
import Temp from '../components/weather/Temp'
import TempMinMax from '../components/weather/TempMinMax'
import TemplateAnyWeather from '../components/weather/TemplateAnyWeather'
import TemplateForecast from '../components/weather/TemplateForecast'
// Style
import styled from 'styled-components'
// Animate
import { motion } from 'framer-motion'
// units
import { sunn, replaceComma, msTokmh, dayTime, dateDay } from '../units'
// Images
import humidity_img from '../images/humidity.svg'
import barometer_img from '../images/barometer.svg'
import wind_img from '../images/wind-1.svg'
import sunrice_img from '../images/sunrise.svg'
import sunset_img from '../images/sunset.svg'
import sand_clock_img from '../images/sand-clock.svg'

const Home = ({ coord, foundData, setFindTowns }) => {

    // array for tree day forecast
    const [forecastArray] = useState([1, 2, 3])

  return (
    <StyleHome
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.3 }}
    >
        <Header setFindTowns={setFindTowns} coord={coord}/>
        
        <div className="results-weather">
            {foundData && 
                <div className="foundData">
                    <div className="row-01">
                        <Sky
                            img={foundData.current.weather[0].icon} 
                            main={foundData.current.weather[0].main} 
                        />

                        <Temp temp={replaceComma(Math.round(foundData.current.temp), '.', ',')} />
                        <TempMinMax 
                            max={Math.round(foundData.daily[0].temp.max)}
                            min={Math.round(foundData.daily[0].temp.min)} />
                    </div>

                    <div className="row-02">
                        <TemplateAnyWeather 
                            img={humidity_img}
                            value={foundData.current.humidity + "%"}
                            description="Humidity"
                        />    
                        <TemplateAnyWeather 
                            img={barometer_img}
                            value={replaceComma(foundData.current.pressure / 1000, '.', ',') + " mBar"}
                            description="Pressure"
                        />    
                        <TemplateAnyWeather 
                            img={wind_img}
                            value={msTokmh(foundData.current.wind_speed) + " km/h"}
                            description="Wind"
                        />    
                    </div>

                    <div className="row-03">
                        <TemplateAnyWeather 
                            img={sunrice_img}
                            value={sunn(foundData.current.sunrise)}
                            description="Sunrice"
                        /> 
                        <TemplateAnyWeather 
                            img={sunset_img}
                            value={sunn(foundData.current.sunset)}
                            description="Sunset"
                        /> 
                        <TemplateAnyWeather 
                            img={sand_clock_img}
                            value={dayTime(foundData.current.sunset, foundData.current.sunrise)}
                            description="Daytime"
                        /> 
                    </div>

                    {/* <div className="row-04 test">
                        {[...Array(3)].map((_, index) => (
                            <TemplateForecast key={index}
                                img={foundData.daily[index + 1].weather[0].icon}
                                value={dateDay(foundData.daily[index + 1].dt)}
                                max={Math.round(foundData.daily[index + 1].temp.max)}
                                min={Math.round(foundData.daily[index + 1].temp.min)}
                            />
                        ))}
                    </div> */}

                    <div className="row-04">
                        {forecastArray.map( item => (
                            <TemplateForecast key={item}
                            img={foundData.daily[item].weather[0].icon}
                            value={dateDay(foundData.daily[item].dt)}
                            max={Math.round(foundData.daily[item].temp.max)}
                            min={Math.round(foundData.daily[item].temp.min)}
                            />
                        ))}
                    </div>

                </div>
            }
        </div>
    </StyleHome>
  )
}
const StyleHome = styled(motion.section)`
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
    position: relative;
    top: -1.7em;
    border-radius: 1em 1em 0 0;
    overflow: hidden;

    @media (min-width: 700px) {
        min-width: 40em;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        top: 0em;
        border-radius: 1em;
    }
    .results-weather {
        width: 100%;
    }

    .foundData {
        width: 100%;
        .row-01,
        .row-02,
        .row-03 {
            display: flex;
            padding-top: 1em;
        }
        .row-04 {
            display: flex;
            justify-content: space-evenly;
            padding: 1em 0 1.8em;
        }

        .forcast {
            background: #FFFFFF;
            box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
            border-radius: 1em;    
        }
    }
`

export default Home