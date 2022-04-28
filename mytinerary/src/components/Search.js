import React from "react";
import "../styles/search.css";
import { FaSearch } from 'react-icons/fa';
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";

function Search() {
    const[{cities},dispatch]=useStateValue()

    const imputSearch=(event)=>{
        dispatch({
            type:actionType.FILTER,
            value:event.target.value
        })
    }

    
    return (
         <div className="box mt-5">
             <i><FaSearch/></i>
        <form name="search">
            <input type="text" onChange={imputSearch} className="input" name="txt"  />
            
        </form>
        
            
    </div>

    )
}
export default Search