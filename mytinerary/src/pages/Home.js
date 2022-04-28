import React from 'react';
import '../styles/home.css';
import CitiesCards from '../components/CitiesCards';
import Slider from '../components/Slider';
import Turismo from '../assets/turismo2.png'
import { motion } from "framer-motion"



function Home() {
    return (
        <div>

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.2}}
            className='home'>
                <div className='col-8 '>
                    <motion.img src={Turismo} alt="" width='400'
                      initial={{x:-2000}}
                      animate={{x:0}}
                      transition={{delay:1.5,type:'spring',stiffness:100}}/>
                    <motion.h1 
                    initial={{x:2000}}
                    animate={{x:0}}
                    transition={{delay:1.7,type:'spring',stiffness:100}}>
                        MyTinerary
                    </motion.h1>
                </div>
            </motion.div>
            <div className="most">
                <h2>Most Visited</h2>
            </div>

            <CitiesCards />

            <Slider />


        </div>
    )
}
export default Home;