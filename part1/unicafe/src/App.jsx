import { useState } from 'react'

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({ good, neutral, bad}) => {
  let totalSum = good + neutral + bad
  let average = (good - bad)/totalSum
  let positivePercentage = (good/totalSum) * 100

  console.log('Total sum:', totalSum)
  console.log('Average:', average)
  console.log('Percentage of + feedback:', positivePercentage)

  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {totalSum}</p>
      <p>Average {average}</p>
      <p>Positive {positivePercentage} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => setGood(good + 1)
  const giveNeutralFeedback = () => setNeutral(neutral + 1)
  const giveBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGoodFeedback} text='Good'/>
      <Button handleClick={giveNeutralFeedback} text='Neutral'/>
      <Button handleClick={giveBadFeedback} text='Bad'/>
      <h2>Statistics</h2>
      <Display good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App