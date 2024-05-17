const Country = ({ country, weather }) => {
  const languages = Object.entries(country.languages)
  
  if(weather === '')
    return null

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map(lang => <li key={lang[0]}>{lang[1]}</li>)}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} width='200' height='150'></img>
      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {weather.main.temp} Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Country