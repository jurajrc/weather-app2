
const BASE_URL = "http://api.openweathermap.org/"
const API_KEY = "3c92a025d4a82657c8444d3c6bcda105"

// response coords specified town
export const api_geo = (term) => `${BASE_URL}/geo/1.0/direct?q=${term}&limit=1&appid=${API_KEY}`

// response detail weather by specified coords
export const api_coord = (suradnice) => `https://api.openweathermap.org/data/2.5/onecall?lat=${suradnice.lat}&lon=${suradnice.lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric&lang=sk`


// use .env
//export const api_geo = (term) => `${BASE_URL}/geo/1.0/direct?q=${term}&limit=1&appid=${process.env.WEATHER_APP_API_KEY}`

