const SearchedCountries = ({requestedCountry, handleClick}) => {

    const liStyles = {
        listStyle: "none",
        margin: "5px"
    }

    if(requestedCountry.length === 1) {
      return null
    } 
    else if (requestedCountry.length > 10) {
      return (
      <p>Too many matches, specify another filter</p>
      )
    }
    else {
      return (
      <ul style={{paddingLeft: 0}}>
        {requestedCountry
        .map(country => 
        <li key={country.name.common} style={liStyles}>
            {country.name.common}
            <button onClick={() => handleClick(country.name.common)} style={{marginLeft: "3px"}}>show</button>
        </li>
        )}
      </ul>
      )
    }
}

export default SearchedCountries
