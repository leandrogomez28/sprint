import React from "react";
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import swal from 'sweetalert';
import '../styles/signup.css'
import FacebookLogin1 from 'react-facebook-login/dist/facebook-login-render-props'


function Facebook() {

    const responseFacebook = async (response) => {
        console.log(response);

        const newUser = {
            firstname: response.name,
            lastname: "Facebook",
            email: response.email,
            password: response.id + "Go",
            from: "Facebook", 

        }

        await axios.post("https://mytinerary-leandro.herokuapp.com/api/signup", { newUser })
            .then(response => {
                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details
                    console.log(detailsError)
                    detailsError.map(error =>
                        swal({

                            title: "error",
                            icon: "error",
                            text: error.message,
                            buttons: "ok"
                        })

                    )
                }
                else if (response.data.success === "trueUE") {
                    console.log(response.data)
                }

                else {
                    swal({
                        title: "check your Email",
                        icon: "success",
                        text: response.data.response,
                        buttons: "ok"
                    })
                }


            })



    }

    return (
        <div>
            

            <FacebookLogin1
                appId="3512566545533638"
                autoLoad={false}
                callback={responseFacebook}
                fields="name,email,picture"
                
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="my-facebook-button-class">Sign Up with Facebook</button>
                )}
            />


        </div>
    )
}
export default Facebook;