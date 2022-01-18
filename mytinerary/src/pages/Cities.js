import React from "react";
import '../styles/cities.css';
import Cards from '../components/Cards';
import Search from '../components/Search';


function Cities() {
    return (
        <div className="justify-content-center">
            <div className="cities">
                <h1> Cities</h1>
            </div>

            <Search />

           <div>
                <input class="checkbox" id="checkbox1" type="checkbox" />
                <label for="checkbox1" class="checkbox-label">
                    <span class="on">Continents</span>
                    <span class="off">Cities</span>
                </label>
                
           </div>

            <div className="most">
                <h2>Most Visited</h2>
            </div>

            <Cards />

        </div>
    )


}
export default Cities;