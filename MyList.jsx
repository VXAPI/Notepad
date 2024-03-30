import React from "react";
import  "./App.css";



function MyListThing({ list, onRemove }) {
    return (
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.text}
            <button className="button" onClick={() => onRemove(item.id)}>Remove</button>
          
          </li>
        ))}
      </ul>
    );
  }


  export default MyListThing;