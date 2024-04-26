const Header = ({ text }) => <h2>{text}</h2>

const Part = ({ part }) => <li>{part.name} {part.exercises}</li>

const Content = ({ parts }) => {
  console.log('parts sent to Content',parts);
  return (
    <ul>
      {parts.map( part => <Part key={part.id} part={part}/>)}
    </ul>
  )
}

const TotalExercises = ({ parts }) => {
  let totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  console.log('Total sum', totalExercises);

  return <h4>Total of {totalExercises} exercises</h4>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name}/>
      <Content parts={course.parts} />
      <TotalExercises parts={course.parts} />
    </div>
  )
}

export default Course