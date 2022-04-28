import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Login from "../assets/login2.png"
import { useStateValue } from "../StateProvider"
import axios from 'axios';
import { actionType } from '../reducer';
import {FaRegUserCircle} from 'react-icons/fa'
import {SiYourtraveldottv} from 'react-icons/si'
import { motion } from "framer-motion"



function Navbar() {

    const [{ user }, dispatch] = useStateValue()

    async function cerrarSesion() {

        const email = user.email
       

        await axios.post("https://mytinerary-leandro.herokuapp.com/api/signout", { email })
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    localStorage.removeItem("token")
                    dispatch({
                        type: actionType.USER,
                        user: null
                    })
                }
            })
        //    console.log(response)




    }
    return (
        <motion.nav
        initial={{y:-250}}
            animate={{y:0}}
            transition={{delay:0.2,type:'spring',stiffness:150}}
           
        className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark bg-gradient bg-opacity-75">
            <div className="container-fluid">

                < LinkRouter to='/' className="navbar-brand me-auto align-items-center" >
                <SiYourtraveldottv />
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
                            <FaRegUserCircle/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {!user ?

                                    <li><LinkRouter to='/sign' className="dropdown-item">Sing In</LinkRouter></li>
                                    : <li><LinkRouter to='/' className="dropdown-item" onClick={() => cerrarSesion()}>Sign Out</LinkRouter></li>}

                                <li><LinkRouter to='/signup' className="dropdown-item">SingUp</LinkRouter></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar;