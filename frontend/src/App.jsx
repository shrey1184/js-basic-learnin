import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <h1>chai and fullstack</h1>
      <p>JOKES: {jokes.length} </p>

      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h2>{joke.setup}</h2>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
