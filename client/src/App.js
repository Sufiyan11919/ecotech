import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PlantDetail from './pages/PlantDetail'
import PlantForm from './pages/PlantForm'
import PlantProgress from './pages/PlantProgress'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Feeds from './pages/Feeds';
import Main from './pages/Main';
import Logout from './pages/Logout';
function App() {
  return (
    <BrowserRouter> 
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<PlantDetail/>}/> 
          <Route path="/form" element={<PlantForm/>}/> 
          <Route path="/progress" element={<PlantProgress/>}/>  
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>   
          <Route path="/login" element={<Login/>}/>
          <Route path="/feeds" element={<Feeds/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
