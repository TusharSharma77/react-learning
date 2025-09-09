import Todoitem0 from "./Todoitem0"

const Todoitems = ({todoitems})=>{
    return <div> 
         {todoitems.map(item => <Todoitem0 todoname = {item.name} date= {item.date}></Todoitem0> )}

       </div> 
}
export  default Todoitems