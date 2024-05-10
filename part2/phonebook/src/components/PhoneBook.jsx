import Person from "./Person";

const Phonebook = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map( person => <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id)}/> )}
    </ul>
  )
}

export default Phonebook