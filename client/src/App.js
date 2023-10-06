import React from 'react';
import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import PlantDetail from './pages/PlantDetail'
import PlantForm from './pages/PlantForm'
import PlantProgress from './pages/PlantProgress'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
