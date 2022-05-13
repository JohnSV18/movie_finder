import { useState } from 'react';
import Movies from './Components/Movies';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <div>
        <h1>Movies</h1>
     
        < Movies />
      </div>
      <div className='DisplayStats'>
       
      </div>
    </div>
  );
}

export default App;
