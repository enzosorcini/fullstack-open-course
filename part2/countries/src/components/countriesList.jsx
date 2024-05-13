const CountriesList = ({ countries }) => {
  return (
    countries.map(country => <li key={country.name.official}>{country.name.common}</li>)
  )
}

export default CountriesList