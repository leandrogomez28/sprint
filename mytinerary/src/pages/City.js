import React,{useEffect, useState} from "react";
import axios from 'axios';
import SeeMore from "../components/SeeMore";
import Itinerary from "../components/Itinerary";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router-dom";

function City() {

    const [itineraries, setItineraries]=useState([])
    const [{cities}, dispatch]= useStateValue()
    const{id}= useParams()
    const citySelected= cities.filter(item=>item._id === id)

    console.log(itineraries)

    useEffect(() => {
        window.scrollTo(0, 0);

        
        citySelected.map(city=> 
        
          axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
          .then(response =>setItineraries(response.data.response.itineraries))
          )
    
      }, [])

      console.log(itineraries)

    return(

<div>
    
            <SeeMore citySelected={citySelected}/>
            <Itinerary itineraries={itineraries}/>
            
    
</div>

    )


}
export default City;