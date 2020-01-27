import React from 'react';
import './App.scss';
import HomePage from "./pages/home/home.component";
import ReactGA from 'react-ga';


function App() {
    ReactGA.initialize('UA-157015392-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
