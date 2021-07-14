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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {data.data?data.data.length:"vacio"}
        </p>
        <ul>
        {data.data?data.data.map((item)=><li>{item.title}</li>):"vacio"}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started with mern-docker
        </a>
      </header>
    </div>
  );
}

export default App;