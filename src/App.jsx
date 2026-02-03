import { useState } from 'react'
import './App.css'
import CRUD from './CRUD'
import Demo from './Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Demo/>
    </>
  )
}

export default App
