import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [item, setItem] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/items/123')
      .then(res => res.json())
      .then(res => setItem(res))
      .catch(err => console.log('err ', err));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {JSON.stringify(item)}
      </header>
    </div>
  );
}

export default App;
