import axios from "axios";
import React, { useState } from "react";
import {FcLike, FcLikePlaceholder } from 'react-icons/fc';

import { useStateValue } from "../StateProvider"
import '../styles/likes.css'



function Likes(props) {

    const [{ user }, dispatch] = useStateValue()

    const [likes, setLikes] = useState(props.likes)

    console.log(props)
    console.log(user)


    const likeDislike = async () => {
        const token = localStorage.getItem("token")
        await axios.put(`https://mytinerary-leandro.herokuapp.com/api/likesdislikes/${props.id}`, {}, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response =>
                setLikes(response.data.response))

    }

    let colorhearth = likes?.includes(user?.id)? <FcLike /> : <FcLikePlaceholder />
    
    return (
        <>
            {user?
                <div className="button-likes">
                    <button onClick={likeDislike}>
                        <span>{colorhearth}</span>
                    </button>
                    <span> {likes?.length}</span>
                </div>
                :
                <div className="button-likes">
                    <span>{colorhearth}</span>
                    <span> {likes?.length}</span>
                </div>

            }
        </>
    )
}
export default Likes;