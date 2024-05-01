import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123123123', id: 1}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1}

    const notExistsInPhonebook = persons.every( person => JSON.stringify(person.name).toLowerCase() !== JSON.stringify(newPerson.name).toLowerCase())
    console.log('after function', notExistsInPhonebook);

    if(notExistsInPhonebook){
      console.log('new person', newPerson);
      setPersons( persons.concat(newPerson) )
      setNewName('')
      setNewNumber('')
    }else{
      console.log('person already exists', newPerson);
      alert(`${newName} already exists in the phonebook`)
    }
  }

  const handleNameChange = nameEvent => setNewName(nameEvent.target.value)

  const handleNumberChange = numberEvent => setNewNumber(numberEvent.target.value)

  const handleFilterChange = filterEvent => setFilter(filterEvent.target.value)

  let filteredPhonebook;
  console.log('filter status', filter);
  if (filter === '') {
    console.log('empty filter', filter);
    filteredPhonebook = persons
  }else{
    console.log('filter active', filter);
    filteredPhonebook = persons.filter( person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter names with: <input value={filter} onChange={handleFilterChange}/></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { filteredPhonebook.map( person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App