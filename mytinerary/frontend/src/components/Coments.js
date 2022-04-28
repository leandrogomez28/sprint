import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider"
import axios from "axios";
import swal from "sweetalert";
import '../styles/itinerary.css'


function Coments(props) {

    const [comment, setComment] = useState()

    const [{ user }, dispatch] = useStateValue()

    const [reload, setReload] = useState(false)

    const [cambio, setCambio] = useState()


    const submitComent = async (event) => {
        event.preventDefault()


        const dataComents = {
            itinerario: props.itinerario,
            message: event.target[0].value,
            user: user.id
        }
        await axios.post("https://mytinerary-leandro.herokuapp.com/api/coments", { dataComents })
        .then(response => {
            console.log(response)
               swal({
                      title:response.data.message,
                      icon:"success",
                      buttons: "ok"
                  })
                    })
                    setReload(!reload)
                 
                
                  }

    useEffect(() => {
        let id = props.itinerario
        axios.get(`https://mytinerary-leandro.herokuapp.com/api/coments/${id}`)
            .then(response =>
                setComment(response.data.response.comentario))

    }, [reload])



    const borrarComentario = (id) => {
        axios.delete(`https://mytinerary-leandro.herokuapp.com/api/coments/${id} `)
        .then(response => {
            console.log(response)
               swal({
                      title:response.data.message,
                      icon:"success",
                      buttons: "ok"
                  })
                    })
                    setReload(!reload)
                 
                
                  }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        console.log(id)
        let data = cambio
        axios.put(`https://mytinerary-leandro.herokuapp.com/api/coments/${id} `, { data })
        .then(response => {
            console.log(response)
               swal({
                      title:response.data.message,
                      icon:"success",
                      buttons: "ok"
                  })
                    })
                    setReload(!reload)
                 
                
                  }

    console.log(comment)

    return (

        <div>



            <div className="card__footer d-flex" >
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Comentarios
                            </button>
                        </h2>

                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                            {user ?

                                <form onSubmit={submitComent} className="coments" >


                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>


                                    <button className="btn btn-success mx-1" type="submit">send</button>
                                </form>

                                :
                                <div>
                                     <h3 className="mx-5">You must be logged in to comment</h3>
                                    
                                </div>
                            }
                            {comment?.map(item =>

                                <div class="accordion-body">
                                    {user?.id === item.user._id ?
                                        <div>
                                            <div class="user mt-2">
                                                <div className="icon-user">

                                                </div>
                                                <div className="user-info">
                                                    <h5>{item.user.firstname} {item.user.lastname} {item.user.name}</h5>
                                                    <div >
                                                        <input onKeyUp={handelChange} className="coment-user" defaultValue={item.comment}></input>
                                                    </div>
                                                    <small>2h ago</small>

                                                </div>

                                            </div>
                                            <div className="botones">
                                                <div>
                                                    <button className='btn btn-danger mx-2' onClick={() => borrarComentario(item._id)}>borrar</button>
                                                </div>
                                                <div>
                                                    <button className='btn btn-primary' onClick={() => modificar(item._id)}>edit</button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div class="user mt-2">
                                                <div className="icon-user">

                                                </div>
                                                <div className="user-info">
                                                    <h5>{item.user.firstname} {item.user.lastname} {item.user.name}</h5>
                                                    <div>
                                                        <p >{item.comment}</p>
                                                    </div>
                                                    <small>2h ago</small>

                                                </div>

                                            </div>

                                        </div>
                                    }
                                </div>
                            )}




                        </div>





                    </div>






                </div>
            </div>




        </div>
    )
}
export default Coments;