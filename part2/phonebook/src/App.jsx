import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneListService from './services/phoneListService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    phoneListService
      .getAllList()
      .then(fullList => {
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
      if(confirm(`${newName} is already added to phonebook, replace the old number\nwith a new one?`)) {
        phoneListService
        .revisePhoneNumber(persons.find(person => person.name === nameObject.name).id, nameObject)
        .then(revisedPhoneNumber => {
          setPersons(persons.map(person => person.id === revisedPhoneNumber.id ? revisedPhoneNumber : person))
          setMessage(`Revised phone number of ${revisedPhoneNumber.name}`)
          setTimeout(() => {
          setMessage(null)
        }, 5000)
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else{
      phoneListService
      .newPhoneNumber(nameObject)
      .then(returnedPhoneNumber => {
        setPersons(persons.concat(returnedPhoneNumber))
        setMessage(`Added ${returnedPhoneNumber.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deleteName = (id) => {
    phoneListService
      .deletePhoneNumber(id)
      .then(returnedPhoneNumber => {
        setPersons(persons.filter(person => person.id !== returnedPhoneNumber.id))
        setMessage(`Deleted ${returnedPhoneNumber.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
      <Notification message={message} />
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