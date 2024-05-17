import { useState, useEffect } from 'react'

import countriesService from './services/countries'

import CountriesList from './components/countriesList'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter] = useState('')
  const [ country, setCountry ] = useState('')
  const [ weather, setWeather ] = useState('')

  useEffect( () => {
    countriesService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  const handleFilterChange = (filterEvent) => {
    setFilter(filterEvent.target.value)
    setCountry('')
    setWeather('')
  }
  const handleShowCountry = (country) => {
    setCountry(country)

    countriesService
      .getCoords(country.capital[0], country.cca2)
      .then(coords => {
        countriesService
          .getWeather(coords.lat, coords.lon)
          .then(weather => {
            setWeather(weather)
          })
      })
      .catch(error => setWeather(''))
  }

  if (country !== ''){
    return (
      <div>
        <Filter filterState={filter} filterHandler={handleFilterChange}/>
        <Country country={country} weather={weather}/>
      </div>
    )
  }

  let filteredCountries;
  if (filter === '') {
    console.log('render everything', countries);
    filteredCountries = []
    return (
      <div>
        <Filter filterState={filter} filterHandler={handleFilterChange}/>
        <CountriesList countries={filteredCountries} handleShow={handleShowCountry}/>
      </div>
    )
  }else{
    filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length > 10) {
      console.log('render list');
      return (
        <div>
          <Filter filterState={filter} filterHandler={handleFilterChange}/>
          <p>Too many countries, please specify another filter</p>
        </div>
      )
    }else if(filteredCountries.length > 1 && filteredCountries.length <= 10){
      console.log('render small list');
      return (
        <div>
          <Filter filterState={filter} filterHandler={handleFilterChange}/>
          <CountriesList countries={filteredCountries} handleShow={handleShowCountry}/>
        </div>
      )
    }else if (filteredCountries.length === 1) {
      console.log('render country from filter');
      handleShowCountry(filteredCountries[0])
    }
  }
}

export default App
