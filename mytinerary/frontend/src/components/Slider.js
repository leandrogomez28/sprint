import React from "react";
import '../styles/slider.css';
import City1 from "../assets/city1.jpg"
import City2 from "../assets/city7.jpg"
import City3 from "../assets/city3.jpg"
import Cities from "../assets/cities1.jpg"


function Slider() {

  return (

    <div>
      <div className="medio">
        <div className="imagen-medio">
          <img src={Cities} />
        </div>
        <div className="titulo-medio">
          <h1>tour every city</h1>
          <hr></hr>
          <h4>Save places recommended by travelers for your trip
            See the things to do, restaurants and hotels you saved on a map
            Easily access all your saved items on the go, no matter where you go</h4>
        </div>
      </div>

      <div className="carousel mt-5">


        <div id="carouselExampleCaptions" className="carousel slide col-8" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner shadow-lg mb-5  rounded">
            <div className="carousel-item active">
              <img src={City1} className="d-block w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src={City3} className="d-block w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src={City2} className="d-block w-100" alt="..." />

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>





      </div>
    </div>
  )
}
export default Slider;