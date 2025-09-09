import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    name: "Tushar",
    age: 19,
  }
  let newarr =[1,2,3];
  return (
    <>
   <h1 className='bg-white text-black p-4 rounded-4xl font-bold'>Hello tailwind</h1>
 <Card username = " chai aur code"  ></Card>
 <Card></Card>
    </>
  )
}

export default App
