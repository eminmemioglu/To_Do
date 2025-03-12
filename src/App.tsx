import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ToDoCreate />
  )
}

export default App
