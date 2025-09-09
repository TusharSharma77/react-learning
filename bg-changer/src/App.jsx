
import {useState} from "react"
function App() {
  const [color,setcolor] = useState("black")

  return  (
   <div className = " w-full h-screen"
   style = {{backgroundColor : color}}>
    <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-xl p-2 bg-amber-50 "> 
        <button  onClick ={ () => setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xs "style = {{backgroundColor:"red"}}>red</button>
          <button  onClick ={ () => setcolor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-2xs "style = {{backgroundColor:"green"}}>green</button>
            <button  onClick ={ () => setcolor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-2xs "style = {{backgroundColor:"blue"}}> blue</button>
              <button onClick ={ () => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xs "style = {{backgroundColor:"yellow"}}>yellow</button>
      </div>
    </div>
    
   </div>
  )
}

export default App
