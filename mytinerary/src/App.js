import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import './styles/navbar.css';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import Info from './pages/Info';



import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element= {<Home />} />
       <Route path='/cities' element= {<Cities />} />
       <Route path='/cities/info' element= {<Info />} />
       <Route path='/sign' element= {<Sign/>} />
       <Route path='/signup' element= {<SignUp/>} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
