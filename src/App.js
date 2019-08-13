import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date')
      const newDate = await res.text()
      setDate(newDate)
    }
    getDate()
  }, [])
  return (
    <main>
      <h1>Now you tell em</h1>

      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  )
}

export default App
