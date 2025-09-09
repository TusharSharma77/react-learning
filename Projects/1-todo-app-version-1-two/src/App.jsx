import { useState } from "react";
import Appname from "./Appname";
import Addtodo from "./Addtodo";
import Todoitems from "./Todoitems";

import "./App.css";
import Todoitem0 from "./Todoitem0";

function App() {
const todoitems = [
  {
    name: "react learn",
    date: "07/09/2025",
  },
  {
    name: "react learn",
    date: "07/09/2025",
  },
];

  return (
    <center class="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      
      <Todoitems todoitems={todoitems}></Todoitems>
     
    </center>
  );
}

export default App;
