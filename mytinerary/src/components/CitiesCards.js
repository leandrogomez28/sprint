import React from "react";
import '../styles/citiescards.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Imgcard from '../assets/buenosaires.jpg'
import { Link as LinkRouter } from 'react-router-dom';

function CitiesCards() {
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
    return (
        <div className="d-flex col-12 justify-content-center " id="card">

            <Carousel responsive={responsive} draggable={true} className="d-flex col-10 align-items-center justify-content-space-around">

                <div className="card" style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100" />
                    <div className="card-body  ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100 " />
                    <div className="card-body  ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100 " />
                    <div className="card-body   ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100 " />
                    <div className="card-body  ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100 " />
                    <div className="card-body  ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
            </Carousel>
        </div>);


}
export default CitiesCards;