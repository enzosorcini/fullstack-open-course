import { useState, useEffect } from 'react'
import personsService from './services/persons'

import Phonebook from './components/PhoneBook'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  
  useEffect( () => {
    console.log('first render')
    personsService
      .getAll()
      .then( phonebookContacts => {
        console.log('response fulfilled', phonebookContacts)
        setPersons(phonebookContacts)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber}

    const notExistsInPhonebook = persons.every( person => JSON.stringify(person.name).toLowerCase() !== JSON.stringify(newPerson.name).toLowerCase())

    if(notExistsInPhonebook){
      console.log('new person', newPerson)
      personsService
        .create(newPerson)
        .then( returnedNewPerson => {
          setPersons(persons.concat(returnedNewPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch( error => console.log('error creating new person', error))
    }else{
      console.log('person already exists', newPerson);
      alert(`${newName} already exists in the phonebook`)
    }
  }

  const handleNameChange = nameEvent => setNewName(nameEvent.target.value)

  const handleNumberChange = numberEvent => setNewNumber(numberEvent.target.value)

  const handleFilterChange = filterEvent => setFilter(filterEvent.target.value)

  let filteredPhonebook;
  if (filter === '') {
    filteredPhonebook = persons
  }else{
    filteredPhonebook = persons.filter( person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterState={filter} filterHandler={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={addPerson}
        nameState={newName}
        nameHandler={handleNameChange}
        numberState={newNumber}
        numberHandler={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Phonebook persons={filteredPhonebook}/>
    </div>
  )
}

export default App