// import React from 'react';
// import ReactDom from 'react-dom/client';
// // import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
// import Home from './components/Home';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <h1>My React Router App</h1>
//         </header>
//         <main>
//           <Routes>
//             <Route exact path="/" component={Home} />
//             {/* <Home/> */}
//             <Route path="/plant_detail" component={Home} /> 
//             {/* <Home/> */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlantDetail from './pages/PlantDetail';
import PlantProgress from './pages/PlantProgress';
import PlantForm from './pages/PlantForm';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant_detail" element={<PlantDetail />} />
        <Route path="/plant_progress" element={<PlantProgress />} />
        <Route path="/plant_form" element={<PlantForm />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}