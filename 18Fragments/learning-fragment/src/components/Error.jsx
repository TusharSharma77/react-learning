const Error = () => {
     let fooditems =["dal","roti","salad","milk"];
  return (
    <>
  
     { fooditems.length ===0? <h3>i am hungry</h3>:null }
  
</>
  );
};
export default Error;