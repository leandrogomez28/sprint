import React from 'react';
import '../styles/home.css';
import CitiesCards from '../components/CitiesCards';
import Slider from '../components/Slider';
import Turismo from '../assets/turismo2.png'



function Home() {
    return (
        <div>

            <div className='home'>
                <div className='col-8 '>
                    <img src={Turismo} alt="" width='400' />
                    <h1>
                        MyTinerary
                    </h1>
                </div>
            </div>
            <div className="most">
                <h2>Most Visited</h2>
            </div>

            <CitiesCards />

            <Slider />


        </div>
    )
}
export default Home;