import React, { useState } from "react";
import { data } from "../../../Data";
import { contact } from "../../../Contact";
const ErrorExample = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople(data.splice(0));
  };
  const removeItem = (id) => {
     
    setPeople((old)=>{
      let newPeople = old.filter((person) => person.id !== id); 
      return newPeople
    } );
  };

  const handleAdd = () => {
    people === data ? setPeople(contact) : setPeople(data)

};

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
      <button onClick={handleClick} className="btn">
        clear
      </button>
      <button onClick={ handleAdd} className="btn">
        add
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
