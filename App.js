import React, { useState } from 'react';
import './App.css';
import MyListThing from './MyList';


function MyApp() {
  const [list, setList] = useState([]);
  const [word, setWord] = useState('');

  const changeWord = (e) => setWord(e.target.value);

  const addToList = (e) => {
    e.preventDefault();
    if (!word.length) {
      return;
    }
    const newItem = {
      text: word,
      id: Date.now(),
    };
    setWord('');
    setList(list.concat(newItem));
  };

  const removeItem = (itemId) => {
    setList(list.filter(item => item.id !== itemId));
  };

  return (
    
    <div className='diiv'>
      <form onSubmit={addToList}>
        <input onChange={changeWord} value={word}/>
        <button className="button">Add {list.length+1}</button>
      </form>
      <h2 className='diiv' id='MyList' >My List</h2>
      <MyListThing list={list} onRemove={removeItem}/>
    
    </div>
  );
}



export default MyApp;
