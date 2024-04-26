import Course from './components/Course'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
/*
  const course2 = {
    id: 2,
    name: 'Half Stack application development II',
    parts: [
      {
        name: 'Fundamentals of React II',
        exercises: 15,
        id: 1
      },
      {
        name: 'Using props to pass data II',
        exercises: 5,
        id: 2
      },
      {
        name: 'State of a component II',
        exercises: 8,
        id: 3
      }
    ]
  }
*/
  return (
    <div>
      <Course key={course.id} course={course} />
      {/*<Course key={course2.id} course={course2} />*/}
    </div>
  )
}

export default App