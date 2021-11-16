import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])

  useEffect (() => {
    axios 
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        setTodos(res.data)
      })
      .catch (err => {
        console.log(err)
      })
  })


  return (
    <div>
    {todos.map(item => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
    ))}
    </div>
  );
}

export default App;
