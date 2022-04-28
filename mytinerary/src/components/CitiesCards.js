import React from "react";
import '../styles/citiescards.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Imgcard from '../assets/buenosaires.jpg'
import { Link as LinkRouter } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

function CitiesCards() {

    const [{cities},dispatch]=useStateValue()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const citiesMostPopular= cities.slice(0,9)
    console.log(citiesMostPopular);
    
    return (
        <div className="d-flex col-12 justify-content-center " id="card">

            <Carousel responsive={responsive} draggable={true} className="d-flex col-10 align-items-center justify-content-space-around">
            {citiesMostPopular.map((example) => {
                            return (

                                <div className="card " key={example._id} style={{ width: "18rem" }}>
                                    <img src={process.env.PUBLIC_URL +`/images/${example.img}`} key={example._id} className="w-100" />
                                    <div className="card-body  ">
                                        <h5 className="card-title">{example.name}</h5>
                                        <h6 className="card-title">{example.country}</h6>
                                        <p className="card-text">{example.description}</p>

                                        <LinkRouter to={`/city/${example._id}`}  className="btn btn-dark bg-gradient ">See More</LinkRouter>

                                    </div>
                                </div>
                            );
                        })
                    }
               
            </Carousel>
        </div>);


}
export default CitiesCards;