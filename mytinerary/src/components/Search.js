import React from "react";
import "../styles/search.css";
import { FaSearch } from 'react-icons/fa';

function Search() {
    return (
         <div className="box mt-5">
             <i><FaSearch/></i>
        <form name="search">
            <input type="text" className="input" name="txt"  />
            
        </form>
        
            
    </div>

    )
}
export default Search