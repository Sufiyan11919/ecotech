import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PlantDetail from './pages/PlantDetail'
import PlantForm from './pages/PlantForm'
import PlantProgress from './pages/PlantProgress'
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter> 
          <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<PlantDetail/>}/> 
          <Route path="/form" element={<PlantForm/>}/> 
          <Route path="/progress" element={<PlantProgress/>}/>  
          <Route path="/signup" element={<Signup/>}/>   
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="*" element={<h1>Not Found</h1>}/> */}
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
