import React from "react";
import '../styles/itinerary.css'

import Coments from "./Coments";

import Likes from './Likes'


function Itinerary(props) {




    const itineraries = props.itineraries
    console.log(itineraries) 
    return (

        <div className="itinerary">
            {itineraries.map((item) => {
                return (
                    <div className="">

                        <div class="container1" >
                            <div className="card1" key={item._id}>
                                <div className="card__header">
                                    <img src={process.env.PUBLIC_URL + `/imgItinerarios/${item.img}`} className="w-100" />
                                </div>
                                <div class="card__body">
                                    <div className="d-flex justify-content-center">
                                        <span className="tag tag-blue">{item.city}</span>
                                        <span className="tag tag-red">{item.price}</span>
                                        <span className="tag tag-brown">{item.time}</span>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                               
                                
                                <Coments itinerario={item._id}/>
                                
                                <Likes likes={item.likes} id={item._id}/>
                                

                            </div>


                        </div>


                    </div>
                )


            })}



        </div>

    )

}

export default Itinerary;