import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = ({texts, values}) => {
  return(
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text={texts[0]} value ={values[0]} /></tr>
          <tr><StatisticLine text={texts[1]} value ={values[1]} /></tr>
          <tr><StatisticLine text={texts[2]} value ={values[2]} /></tr>
          <tr><StatisticLine text={texts[3]} value ={values[3]} /></tr>
          <tr><StatisticLine text={texts[4]} value ={values[4]} /></tr>
          <tr><StatisticLine text={texts[5]} value ={values[5]} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalFeedback = good + neutral + bad
  const average = (good - bad) / totalFeedback
  console.log(good-bad)
  const positive = good / totalFeedback * 100 + ' %'
  const texts = ['good', 'neutral', 'bad', 'all', 'average', 'positive']
  const values = [good, neutral, bad, totalFeedback, average, positive]

  const handleClick = (feedback) => {
    switch(feedback) {
      case "good":
        setGood(good + 1);
      break;
      case "neutral":
        setNeutral(neutral + 1);
      break;
      case "bad":
        setBad(bad + 1);
    }
  }
  if (totalFeedback < 1 ) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button name='good' handleClick={() => handleClick("good")} />
        <Button name='neutral' handleClick={() => handleClick("neutral")} />
        <Button name='bad' handleClick={() => handleClick("bad")} />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button name='good' handleClick={() => handleClick("good")} />
      <Button name='neutral' handleClick={() => handleClick("neutral")} />
      <Button name='bad' handleClick={() => handleClick("bad")} />
      <h1>statistics</h1>
      <Statistics texts={texts} values={values} />
    </div>
  )
}

export default App
