import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
// import { date } from './api/date'

function App() {
  const [input, setInput] = useState(null)

  useEffect(() => {
    setInput('what does Marsellus Wallace look like?')
  }, [input, setInput])
  return (
    <main>
      <h1>say what again</h1>

      <h2>I double dare you</h2>
      <p>{input ? input : 'Loading input...'}</p>
      <p>{/* To test the API, <a href="/api/date">check todays date</a>. */}</p>
    </main>
  )
}

export default App
