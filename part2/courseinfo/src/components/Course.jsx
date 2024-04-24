const Header = ({ text }) => <h1>{text}</h1>

const Part = ({ part }) => {
  console.log('part inside Part', part);
  return <li>{part.name} {part.exercises}</li>
}

const Content = ({ parts }) => {
  console.log('parts sent to Content',parts);
  return (
    <div>
      <ul>
        {parts.map( part => <Part key={part.id} part={part}/>)}
      </ul>
    </div>
  )
}

const Course = ({ course }) => {
  console.log('course sent to Course', course);
  return (
    <div>
      <Header text={course.name}/>
      <Content parts={course.parts} />
    </div>
  )
}

export default Course