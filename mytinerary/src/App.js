import React, { useEffect } from 'react'
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import './styles/navbar.css';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import City from './pages/City';
import Footer from './components/Footer';
import axios from 'axios'



function App() {

  const [{ cities }, dispatch] = useStateValue()


  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })

      })
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      const user = axios.get("http://localhost:4000/api/signintoken", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      .then(user=>{
      if (user.data.success) {
        dispatch({
          type: actionType.USER,
          user: user.data.respuesta
        })
      } else {
        localStorage.removeItem("token")
      }
    })
  }
  }, [])







  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/city/:id' element={<City />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
