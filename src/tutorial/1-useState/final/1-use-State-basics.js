import React, { useState } from "react";

function Final() {
const [person, setPerson] = useState(
  {
    name: "peter",
    age: 27,
    message: "welcome",
  },
  
);

const handleChange = ()=>{
    setPerson({...person, message: "hello"})
}
  return (
    <React.Fragment>
       
            
        <div>
        <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message} {person.name}</h3>
      <button className="btn" onClick={handleChange}>change</button>
        </div>
        

      
    </React.Fragment>
  );
}

export default Final;
