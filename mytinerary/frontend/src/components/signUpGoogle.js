import React from "react";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import swal from 'sweetalert';
import '../styles/signup.css'

function Google(){

    const responseGoogle = async (response) => {
		console.log(response);

		const newUser = {
			firstname: response.profileObj.givenName,
			lastname: response.profileObj.familyName,
			email: response.profileObj.email,
			password: response.googleId + "Go",
			from: "Google",
			
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

    return(
        <GoogleLogin className="googleUp"
        clientId="852724625481-h33uc21h246f6lehumgddshi5kj5brrm.apps.googleusercontent.com"
        buttonText="SignUp with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    )
}
export default Google;