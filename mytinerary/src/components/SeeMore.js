import React, { useEffect } from "react";
import '../styles/seemore.css'
import Moneda from '../assets/moneda.png'
import Idioma from '../assets/idioma.png'
import America from '../assets/continentes3.png'


function SeeMore(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const cities = props.citySelected

    console.log(cities)




    return (


        <>

            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            

            {cities.map((item) => {
                return (
                    
                    <div className="header-city"style={{ backgroundImage: `url(${process.env.PUBLIC_URL +`/images/${item.img}`})`,backgroundSize: "cover" }}   >
                        
                        <div>
                            <h1 >{item.name}</h1>
                        </div>
                        <div className="information">
                            <div >
                            <img src={Moneda} alt=""/>
                                
                                <h4>{item.currency}</h4>
                            </div>
                            <div>
                            <img src={Idioma} alt=""/>
                                <h4>{item.language}</h4>
                            </div>
                            <div>
                            <img src={America} alt=""/>
                                <h4>{item.continents}</h4>
                            </div>

                        </div>

                    </div>

                )


            })}



        </>

    )


}
export default SeeMore;