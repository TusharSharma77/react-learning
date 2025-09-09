import { useState } from "react";
import Appname from "./Appname";
import Addtodo from "./Addtodo";
import Todoitem from "./Todoitem";
import Todoitem1 from "./Todoitem1";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Todoitem></Todoitem>
       <Todoitem1></Todoitem1>
      
    </center>
  );
}

export default App;
