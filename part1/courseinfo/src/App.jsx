const Header = (props) => {
  return (
    <>
      <p>{props.name}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.arr[0][0]} exercises={props.arr[0][1]}/>
      <Part part={props.arr[1][0]} exercises={props.arr[1][1]}/>
      <Part part={props.arr[2][0]} exercises={props.arr[2][1]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3]
  ]

  return (
    <>
      <Header name={course}/>
      
      <Content arr={content}/>

      <Total total={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

export default App