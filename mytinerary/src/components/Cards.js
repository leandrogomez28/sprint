import React from "react";
import '../styles/citiescards.css';
import "react-multi-carousel/lib/styles.css";
import Imgcard from '../assets/buenosaires.jpg'
import { Link as LinkRouter } from 'react-router-dom';


function Cards() {
    return (
       <div className="row justify-content-center">
            <div className="card-citie col-10 mt-4">
                <div className="card " style={{ width: "18rem" }}>
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
                <img src={Imgcard} className="w-100" />
                <div className="card-body  ">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <LinkRouter to='/cities/info'>
                        <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                    </LinkRouter>
                </div>
            </div>
            <div className="card " style={{ width: "18rem" }}>
                    <img src={Imgcard} className="w-100" />
                    <div className="card-body  ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <LinkRouter to='/cities/info'>
                            <a href="#" className="btn btn-dark bg-gradient ">See More</a>
                        </LinkRouter>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Cards;