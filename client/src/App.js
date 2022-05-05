import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const result = await axios('/api/posts/',
    );
    setData(result.data);
  });


  return (
    <div className="App">
      <header className="App-header">
      
      <h1>Listado de elementos</h1>
      <p>
        {data.data ? "Número de elemento en BBDD: " + data.data.length : "BBDD vacía"}
      </p>
        <ul>
          {data.data ? data.data.map((item) => <li style={{"list-style": "none"}}>{item.title}</li>) : "vacio"}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo MERN con Docker Compose
        </a>
      </header>
    </div>
  );
}

export default App;