import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

import List from './components/List'

function App() {
  // const [input, setInput] = useState('')
  const [question, setQuestion] = useState(
    'what does Marsellus Wallace look like?'
  )
  const [response, setResponse] = useState('')

  console.log(`#response length: `, response.length)

  useEffect(() => {
    what(response)
  }, [response, setResponse, question, setQuestion])

  const what = answer => {
    if (answer.length > 0) {
      setTimeout(() => setQuestion(`SAY "WHAT" AGAIN! I double dare you`), 3000)
    }
  }

  return (
    <main>
      <h4> {question}</h4>
      {response && (
        <h5>
          say <code>what</code>again
        </h5>
      )}
      <div>{response}</div>
      <input
        onChange={e => setResponse(e.target.value)}
        value={response}></input>
      <List />
      <h5>
        say <code>what</code>again
      </h5>
    </main>
  )
  // }
}

export default App
