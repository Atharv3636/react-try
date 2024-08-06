import { useState } from 'react'
import './App.css'

function App() {

  let [counter1, setcounter1] = useState(0)
  function addValue() {
    counter1 = counter1 + 1
    setcounter1(counter1)
  }

  let [counter2, setcounter2] = useState(0)
  const addValue1 = () => {
    counter2 = counter2 + 1
    setcounter2(counter2)
  }

  return (
    <>
      <h2>ank react</h2>
      <h2>counter {counter1}</h2>
      <h2>counter {counter2}</h2>
      <button onClick={addValue}>counter</button>
      <button onClick={addValue1}>counter</button>
    </>
  )
}

export default App
