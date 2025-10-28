import { useState } from 'react'
import React from 'react'
import './App.css'
import Task from './Task.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
    </>
  )
}

export default App
