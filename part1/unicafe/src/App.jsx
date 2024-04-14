import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //refactor names to best practices
  const goodFeedback = () => {}
  const neutralFeedback = () => {}
  const badFeedback = () => {}

  const Button = ({ doSomething, text}) => <button onClick={doSomething}>{text}</button>

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button doSomething={goodFeedback} text='Good'/>
      <Button doSomething={neutralFeedback} text='Neutral'/>
      <Button doSomething={badFeedback} text='Bad'/>
      <h2>Statistics</h2>
    </div>
  )
}

export default App