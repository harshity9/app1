import { useState } from "react";

function App() {
  const [newValue, setInputValue]= useState('');
  const handleChange=(event)=>{
  const newValue= event.target.value 
  setInputValue(newValue);
  console.log(newValue)
}

  return (
      <div>
          <section className="main" style={{backgroundColor: newValue}}></section>
          <input type="text" placeholder="Enter your color" onChange={handleChange} className="nameBox"></input>
      
      </div>
      );
}

export default App;
