import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import SearchedCountries from './components/SearchedCountries'


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [requestedCountry, setRequestedCountry] = useState([])
  const [countryData, setCountryData] = useState([])

  const oneCountry = requestedCountry.length === 1 ? requestedCountry[0] : []

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountryData(response.data)
      })
    }, [])

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    setRequestedCountry(countryData.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())))
    console.log(requestedCountry)
  },[searchQuery])


  const handleClick = (name) => {
    setSearchQuery(name)
  }

  

  return (
    <>
      <div>
        find countries <input type="search" onChange={handleChange}></input>
      </div>
      <SearchedCountries requestedCountry={requestedCountry} handleClick={handleClick} />
      <Country oneCountry={oneCountry} />
    </>
  )
}

export default App
