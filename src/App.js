import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import {coordsTown} from './coordsTown'
// API
import { api_geo, api_coord } from './api';
// components
import Home from './pages/Home';
import SearchForm from './pages/SearchForm';
// Style
import GlobalStyle from './components/GlobalStyle';
// images
import graphic from './images/graphic.svg'

function App() {

  const [coord, setCoord] = useState(null)
  const [location, setLocation] = useState("")
  const [foundData, setFoundData] = useState(null)
  const [findTowns, setFindTowns] = useState(coordsTown)
  //const [day, setDay] = useState('')
  //const [time, setTime] = useState('')


  useEffect( () => {
    getCoords("košice")
  }, [])

  const getCoords = async (term) => {
    await axios.get(api_geo(term))
    .then(data => {
      console.log(data.data);
      setCoord({
        name: data.data[0].name,
        lat: data.data[0].lat.toFixed(3),
        lon: data.data[0].lon.toFixed(3)
      })
    })
    .catch(err => console.log(err))
  }

  useEffect( async () => {
    await axios.get(api_coord(coord))
    .then(data => {
      //console.log(data.data);
      setFoundData(data.data)
    })
    .catch(err => console.log(err))
    
  }, [coord])

  useEffect(() => {
    if(location !== "") {
      getCoords(location)
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(location !== "") {
      getCoords(location)
      setLocation("")
    }
  }

  const sunn = (sec) => {
    const date = new Date(sec * 1000)
    const timestr = date.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' })

    return timestr
  }
  
  const handleFilter = (e) => {
    const filter = coordsTown.filter(item => item.town.includes(e.target.value))
    console.log(filter);
    setFindTowns(filter)
  }

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <div className="background">
        <img src={graphic} alt="pozadie" />
      </div>

      <Routes>
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
            handleSubmit={handleSubmit}
          /> 
        } />
      </Routes>

      
      {/* <form onSubmit={handleSubmit} >
        <input 
          type="text"
          onChange={e => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
      </form> */}

    </div>
    </>
  );
}

export default App;
