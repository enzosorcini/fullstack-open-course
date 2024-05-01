import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123123123' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber}

    const notExistsInPhonebook = persons.every( person => JSON.stringify(person) !== JSON.stringify(newPerson))
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        { persons.map( person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App