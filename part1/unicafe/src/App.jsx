import { useState } from 'react'

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ name, value, extra}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{extra}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  let totalSum = good + neutral + bad
  let average = (good - bad)/totalSum
  let positivePercentage = (good/totalSum) * 100

  if(totalSum === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }else{
    return (
      <table>
          <tbody>
            <StatisticLine name="Good" value={good} extra={null}/>
            <StatisticLine name="Neutral" value={neutral} extra={null}/>
            <StatisticLine name="Bad" value={bad} extra={null}/>
            <StatisticLine name="All" value={totalSum} extra={null}/>
            <StatisticLine name="Average" value={average.toFixed(1)} extra={null}/>
            <StatisticLine name="Positive" value={positivePercentage.toFixed(1)} extra={"%"}/>
          </tbody>
      </table>
    )
  }
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App