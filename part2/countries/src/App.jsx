import { useState, useEffect } from 'react'
import Country from './components/Country'
import SearchedCountries from './components/SearchedCountries'
import Weather from './components/Weather'
import infoServices from '../services/infoServices'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [requestedCountry, setRequestedCountry] = useState([])
  const [countryData, setCountryData] = useState([])


  const oneCountry = requestedCountry.length === 1 ? requestedCountry[0] : []

  useEffect(() => {
    infoServices
    .getAllCountryData()
    .then(allCountryData => {
      setCountryData(allCountryData)
    })
    .catch(error => {
      console.error("Error fetching country data:", error);
  });
  }, [])

  useEffect(() => {
    if(searchQuery.length === 0) {
      setRequestedCountry([])
      return
    }
    setRequestedCountry(countryData.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())))
  },[searchQuery])

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleClick = (name) => {
    setSearchQuery(name)
  }

  return (
    <>
      <div>
        find countries <input type="search" onChange={handleChange} name="search"></input>
      </div>
      <SearchedCountries requestedCountry={requestedCountry} handleClick={handleClick} />
      <Country oneCountry={oneCountry} />
      <Weather oneCountry={oneCountry} />
    </>
  )
}

export default App
