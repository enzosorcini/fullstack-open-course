const CountriesList = ({ countries, handleShow }) => {
  console.log('showing list', countries);

  return (
    countries.map(country => <li key={country.name.official}> {country.name.common} <button onClick={() => handleShow(country)}>show</button></li>)
  )
}

export default CountriesList