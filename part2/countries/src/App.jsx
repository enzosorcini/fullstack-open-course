import { useState, useEffect } from 'react'

import countriesService from './services/countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter] = useState('')

  useEffect( () => {
    console.log('second render', countries);
    countriesService
      .getAll()
      .then(allCountries => {
        console.log('countries obtained', allCountries);
        setCountries(allCountries)
      })
  }, [])

  const handleFilterChange = (filterEvent) => setFilter(filterEvent.target.value)

  let filteredCountries;
  if (filter === '') {
    filteredCountries = countries
  }else{
    filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length > 10) {
      return (
        <div>
          Find Country: <input value={filter} onChange={handleFilterChange}/>
          <p>Too many countries, please specify another filter</p>
        </div>
      )
    }else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      console.log('country object', country);
      return (
        <div>
          Find Country: <input value={filter} onChange={handleFilterChange}/>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <h3>Languages:</h3>
          <p>check how to convert object with multiple key-values into array</p>
        </div>
      )
    }
  }

  return (
    <div>
      Find Country: <input value={filter} onChange={handleFilterChange}/>
      <ul>
        {filteredCountries.map(country => <li key={country.name.official}>{country.name.common}</li>)}
      </ul>
    </div>
  )
}

export default App
