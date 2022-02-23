import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Login from "../assets/login2.png"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark bg-gradient bg-opacity-75">
            <div className="container-fluid">
                
                    < LinkRouter to='/' className="navbar-brand me-auto align-items-center" >
                        <img src={Logo} alt="" width="40" height="35" className="d-inline-block align-text-top" />
                    </LinkRouter>
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="navbar-nav align-items-center ">

                        
                            <div className="nav-item ">
                                <LinkRouter to='/' className="nav-link active" aria-current="page" href="#">Home</LinkRouter>
                            </div>
                        
                    </div>
                    <div className="navbar-nav m-auto align-items-center ">
                        
                            <div className="nav-item ">
                                <LinkRouter to='/cities' className="nav-link active" aria-current="page" href="#">Cities</LinkRouter>
                            </div>
                        
                    </div>
                    <div className='dropdownMayor d-flex justify-content-flex-end'>
                        <div className="dropdown d-flex me-5 align-items-center ">
                            <button className="btn btn-transparent-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={Login} alt="" height="35px" width="30px" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                               
                                    <li><LinkRouter to='/sign' className="dropdown-item">SingIn</LinkRouter></li>
                               
                                
                                    <li><LinkRouter to='/signup' className="dropdown-item">SingUp</LinkRouter></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;