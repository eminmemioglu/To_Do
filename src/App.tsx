import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDo from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToDoCreate />
      <ToDo />
    </div>

  )
}

export default App
