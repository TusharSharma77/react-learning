const Fooditems = () => {
     let fooditems =["dal","roti","salad","milk"]; 
  return (
    <ul class="list-group">
      {fooditems.map((item) => (
        <li key={item} class="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default Fooditems;
