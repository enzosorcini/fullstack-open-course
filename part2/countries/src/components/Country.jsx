const Country = ({ country }) => {
  const languages = Object.entries(country.languages)
  
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
    </div>
  )
}

export default Country