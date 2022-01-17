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
            <div class="form-check form-switch d-flex justify-content-center mt-5">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                <label class="form-check-label" for="flexSwitchCheckChecked">Cities</label>
            </div>

            <div className="most">
                <h2>Most Visited</h2>
            </div>

            <Cards />

        </div>
    )


}
export default Cities;