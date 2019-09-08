import React from 'react';
import Home from './Home'
import './main.scss'
import Header from './Components/Header';

function App() {
  return (
    <React.Fragment>
      <Header/>

      <Home />
    </React.Fragment>
  );
}

export default App;
