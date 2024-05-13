import { useState, useEffect } from 'react'

import countriesService from './services/countries'

import CountriesList from './components/countriesList'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter] = useState('')
  const [ country, setCountry ] = useState('')

  useEffect( () => {
    countriesService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  const handleFilterChange = (filterEvent) => setFilter(filterEvent.target.value)

  const handleShowCountry = (country) => {
    setCountry(country)
}

  let filteredCountries;
  if (filter === '') {
    filteredCountries = []
  }else{
    filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length > 10) {
      return (
        <div>
          <Filter filterState={filter} filterHandler={handleFilterChange}/>
          <p>Too many countries, please specify another filter</p>
        </div>
      )
    }else if (filteredCountries.length === 1) {
      return (
        <div>
          <Filter filterState={filter} filterHandler={handleFilterChange}/>
          <Country country={filteredCountries[0]}/>
        </div>
      )
    }else if (country !== ''){
      return (
        <div>
          <Filter filterState={filter} filterHandler={handleFilterChange}/>
          <Country country={country}/>
        </div>
      )
    }
  }

  return (
    <div>
      <Filter filterState={filter} filterHandler={handleFilterChange}/>
      <CountriesList countries={filteredCountries} handleShow={handleShowCountry}/>
    </div>
  )
}

export default App
