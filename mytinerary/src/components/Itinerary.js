import React, { useEffect } from "react";

import '../styles/itinerary.css'


function Itinerary(props) {

    const itineraries = props.itineraries
    console.log(itineraries)
    return (

        <div className="itinerary">
            {itineraries.map((item) => {
                return (
                    <div className="">

                        <div class="container1">
                            <div class="card1">
                                <div class="card__header">
                                    <img src={process.env.PUBLIC_URL + `/imgItinerarios/${item.img}`} className="w-100" />
                                </div>
                                <div class="card__body">
                                    <span class="tag tag-blue">{item.city}</span>
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div class="card__footer">
                                    <div class="user">
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
                                        <div class="user__info">
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>


                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                </div>
                            </div>


                        </div>


                    </div>
                )


            })}



        </div>

    )

}

export default Itinerary;