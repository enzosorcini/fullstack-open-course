import Person from "./Person";

const Phonebook = ({ persons }) => {
  return (
    <ul>
      {persons.map( person => <Person key={person.id} person={person}/>)}
    </ul>
  )
}

export default Phonebook