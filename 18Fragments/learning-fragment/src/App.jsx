import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import Fooditems from './components/Fooditems';
import Error from './components/Error';
import Container from './container';
function App() {
  
 let fooditems =["dal","roti","salad","milk"];

  return (
    <>
    <Container> 
   <center> <h1>HEALTHY FOOD</h1></center>
  <Error></Error>

   <Fooditems></Fooditems>
   
</Container> 
 <Container> WE DONT HAVE TO MAKE ANOTHER BOX AND THEN CSS </Container> 
</>
 

);
    
}

export default App
