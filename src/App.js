import logo from './asset/logo.svg';
import axios from 'axios';

import { useEffect, useState } from 'react';
import './asset/App.css';
import Input from './components/input';
import './asset/all.scss';

function App() {
  const [text, setText] = useState('');
  const handler = (e) =>{
    setText(e.target.value);
  }

  useEffect(()=>{
    (async ()=>{
      // pull in exterior plugin
      try{
        const path = process.env.REACT_APP_PATH;
        
        const result = await axios.get(path);
        console.log(result);
      }catch(err){
        console.log(err);
      }
    })()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          l
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
        <Input id='sample' text='this is a input' value={text} handler={handler} />
        <button className='btn btn-primary'>btn</button>

      </header>
    </div>
  );
}

export default App;
