import React from "react";
import { useStateValue } from "../StateProvider";
import '../styles/citiescards.css';
import "react-multi-carousel/lib/styles.css";
import Imgcard from '../assets/buenosaires.jpg'
import { Link as LinkRouter } from 'react-router-dom';


function Cards() {

    const [{cities},dispatch]=useStateValue()

    return (

        <div>
            <div className="d-flex justify-content-center">
                <div className="card-citie col-10 mt-4">

                    {cities.map((example) => {
                            return (

                                <div className="card " style={{ width: "18rem"}}>
                                    <img src={process.env.PUBLIC_URL +`/images/${example.img}`} className="w-100" />
                                    <div className="card-body  ">
                                        <h5 className="card-title">{example.name}</h5>
                                        <h6 className="card-title">{example.country}</h6>
                                        <p className="card-text">{example.description}</p>

                                        <LinkRouter to={`/city/${example._id}`} className="btn btn-dark bg-gradient ">See More</LinkRouter>

                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>



    )
}
export default Cards;

