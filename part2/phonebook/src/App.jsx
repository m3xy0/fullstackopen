import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneListService from './services/phoneListService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    phoneListService
      .getAllList()
      .then(fullList => {
        console.log(fullList)
        setPersons(fullList)
      })
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    } 

    if(persons.some(person => person.name === nameObject.name)) {
      alert(`${newName} is already added to phonebook`)
    }
    else{
      phoneListService
      .newPhoneNumber(nameObject)
      .then(returnedPhoneNumber => {
        setPersons(persons.concat(returnedPhoneNumber))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deleteName = (id) => {
    phoneListService
      .deletePhoneNumber(id)
      .then(returnedPhoneNumber => {
        console.log(returnedPhoneNumber);
        setPersons(persons.filter(person => person.id !== returnedPhoneNumber.id))
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        onChange={handleNameFilter} 
      />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons 
        filterName={filterName} 
        persons={persons}
        handleDeletion={deleteName} 
      />
    </div>
  )
}

export default App