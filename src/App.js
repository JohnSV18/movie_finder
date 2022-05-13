import { useState } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import Movies from './Components/MovieList/MovieList';
// import WordList from './Components/WordList/WordList';
import './App.css';
import { useDispatch } from 'react-redux'
const WORD = "WORD";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(WORD)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(WORD, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}
function App() {
  
  const persistedState = loadState();
  const store = createStore(reducers, persistedState);
  store.subscribe(() => {
    saveState(store.getState());
  })
  return ( 
    <Provider store={store}>
      <div className="App">
        <h1>Find a Movie!</h1>
        < Movies />
        {/* < WordList /> */}
      </div>
    </Provider>
   
  );
}

export default App;
