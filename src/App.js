import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import {coordsTown} from './coordsTown'
// API
import { api_geo, api_coord } from './api';
// components
import Home from './pages/Home';
import SearchForm from './pages/SearchForm';
// Style
import GlobalStyle from './components/GlobalStyle';
// Animation
import { AnimatePresence } from 'framer-motion';
// images
import graphic_w511 from './images/grafic-511x413.webp'
import graphic_w1080 from './images/grafic-1080x607.webp'
import graphic_w1920 from './images/grafic-1920x1080.webp'
 
function App() {

  const [coord, setCoord] = useState({name: 'Košice', lat: 48.717, lon: 21.250})
  const [location, setLocation] = useState("")
  const [foundData, setFoundData] = useState(null)
  const [findTowns, setFindTowns] = useState(coordsTown)
  const [size , setSize] = useState([ window.innerWidth])
  
  useEffect( () => {
    getData(coord)
  }, [coord])

  useEffect(() => {
    if(location !== "") {
      getCoords(location)
    }
  }, [location])

  // state resize
  function useWindowSize() {
    useEffect(() => {
      const handleResize = () => {
        setSize([ window.innerWidth])
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    })
  return size
  }
  const [sizeWidth] = useWindowSize()

  // response data coords specific location
  const getCoords = async (term) => {
    await axios.get(api_geo(term))
    .then(data => {
      //console.log(data.data);
      setCoord({
        name: data.data[0].name,
        lat: data.data[0].lat.toFixed(3),
        lon: data.data[0].lon.toFixed(3)
      })
    })
    .catch(err => console.log(err))
  }

  // response data current weather and forecast for 7 days
  const getData = async (coord) => {
    await axios.get(api_coord(coord))
    .then(data => {
      //console.log(data.data);
      setFoundData(data.data)
    })
    .catch(err => console.log(err))
  }

  // click from item town in SearchForm.jsx
  const handleOnClick = () => {
    if(location !== "") {
      getCoords(location)
    }
  }
  
  // filtered from my towns and upgrade state findTowns
  const handleFilter = (e) => {
    const filter = coordsTown.filter(item => item.town.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setFindTowns(filter)
  }

  // necessary for animations when changing subpages
  const locationRouter = useLocation()

  return (
    <>
    <GlobalStyle />
    <div className="App">

      <div className="background">
        <picture>
          <source media='(max-width: 500px)' srcSet={graphic_w511} />
          <source media='(max-width: 1000px)' srcSet={graphic_w1080} />
          <img src={graphic_w1920} alt="pozadie" />
        </picture>
      </div>

      <AnimatePresence exitBeforeEnter>
        <Routes location={locationRouter} key={locationRouter.pathname} >
          <Route path='/' element={ <Home 
            coord={coord}
            foundData={foundData}
            setFindTowns={setFindTowns}
          /> } 
          />

          <Route path='/search' element={ 
            <SearchForm 
              hadleFilter={handleFilter}
              findTowns={findTowns}
              setLocation={setLocation}
              location={location}
              handleOnClick={handleOnClick}
              sizeWidth={sizeWidth}
            /> 
          } />
        </Routes>
      </AnimatePresence>

    </div>
    </>
  );
}

export default App;
