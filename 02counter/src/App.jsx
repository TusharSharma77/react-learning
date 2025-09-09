import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setcounter]=useState(0) // kuch bhi name ho sakta
  const addValue =()=>{
    setcounter(counter + 1)
  }
  const decrease = ()=>{
    if(counter>0){
    setcounter(counter-1);
    }else{
      setcounter(0);
    }
  }
  return (
    <>
      <h1> chai aur react</h1>
      <h2>counter value:{counter} </h2>
      <button 
      onClick={addValue}> add value</button>
      <br />
      <button onClick={decrease}>remove value</button>
    </>
  )
}

export default App
