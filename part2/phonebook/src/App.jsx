import { useState, useEffect } from 'react'
import personsService from './services/persons'

import Phonebook from './components/PhoneBook'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ error, setError ] = useState(null)
  
  useEffect( () => {
    console.log('first render')
    personsService
      .getAll()
      .then( phonebookContacts => {
        console.log('response fulfilled', phonebookContacts)
        setPersons(phonebookContacts)
      })
      .catch( error => console.log('error on first render', error))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber}

    const notExistsInPhonebook = persons.every(person => JSON.stringify(person.name).toLowerCase() !== JSON.stringify(newPerson.name).toLowerCase())

    if(notExistsInPhonebook){
      console.log('new person', newPerson)
      personsService
        .create(newPerson)
        .then( returnedNewPerson => {
          setPersons(persons.concat(returnedNewPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${returnedNewPerson.name} to the phonebook`)
          setTimeout(() => {setNotification(null)}, 5000)
        })
        .catch( error => {
          console.log('error creating new person', error)
          setError(`Cannot add ${returnedNewPerson.name} to the phonebook`)
          setTimeout(() => {setError(null)}, 5000)
        })
    }else{
      console.log('person already exists', newPerson);
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const personInPhonebook = persons.find(person => JSON.stringify(person.name).toLowerCase() === JSON.stringify(newPerson.name).toLowerCase())
        console.log('person to update', personInPhonebook);

        personsService
          .update(personInPhonebook.id, newPerson)
          .then(updatedPerson => {
            console.log('updated person in server', updatedPerson)
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
            setNewName('')
            setNewNumber('')
            setNotification(`Changed ${updatedPerson.name}'s number to ${updatedPerson.number}`)
            setTimeout(() => {setNotification(null)}, 5000)
          })
          .catch( error => {
            console.log('error updating person', error)
            setError(`Information of ${personInPhonebook.name} was already removed from the server`)
            setTimeout(() => {setError(null)}, 5000)
          })
      }
    }
  }

  const handleDelete = id => {
    console.log('delete person', id)
    const personToDelete = persons.find( person => person.id === id)

    if(window.confirm(`Delete ${personToDelete.name}?`)){
      personsService
        .eliminate(personToDelete.id)
        .then( deletedPerson => {
          console.log('deleted person', deletedPerson)
          setPersons(persons.filter(person => person.id !== id ))
          setNotification(`Deleted ${deletedPerson.name} from the phonebook`)
          setTimeout(() => {setNotification(null)}, 5000)
        })
        .catch( error => {
          console.log('error deleting person', error)
          setError(`Cannot delete ${personToDelete.name} from the phonebook`)
          setTimeout(() => {setError(null)}, 5000)
        })
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
      <Notification message={notification}/>
      <Error message={error}/>
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
      <Phonebook persons={filteredPhonebook} handleDelete={handleDelete}/>
    </div>
  )
}

export default App