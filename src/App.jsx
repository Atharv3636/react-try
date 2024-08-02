import { useState } from 'react'
import './App.css'

function App() {

  let [counter1, setcounter1] = useState(0)
  function addValue() {
    console.log("hi1", counter1)
    counter1 = counter1 + 1
    setcounter1(counter1)
  }

  let [counter2, setcounter2] = useState(0)
  const addValue1 = () => {
    console.log("hi", counter2)
    counter2 = counter2 + 1
    setcounter2(counter2)
  }

  return (
    <>
      <h1>ank react</h1>
      <h1>counter {counter1}</h1>
      <h1>counter {counter2}</h1>
      <button onClick={addValue}>counter</button>
      <button onClick={addValue1}>counter</button>
    </>
  )
}

export default App
