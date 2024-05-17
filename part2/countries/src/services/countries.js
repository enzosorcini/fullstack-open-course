import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const api_key = import.meta.env.VITE_SOME_KEY

const getAll = () => {
  const request = axios.get(`${baseUrl}/api/all`)
  return request.then(response => response.data)
}

const getCoords = (city, country) => {
  const coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`
  
  const coordsReq = axios.get(coordsurl)
  return coordsReq.then(response => response.data.find(resCity => resCity.country === country))
}

const getWeather = (lat, lon) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`

  const weatherReq = axios.get(weatherUrl)
  return weatherReq.then(response => response.data)
}

export default { getAll, getCoords, getWeather }