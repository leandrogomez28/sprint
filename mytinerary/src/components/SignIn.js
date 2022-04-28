import React from "react";
import '../styles/signin.css'
import { Link as LinkRouter } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitterSquare } from 'react-icons/fa';
import axios from "axios";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import swal from 'sweetalert';

function SignIn() {

	const [{ user }, dispatch] = useStateValue()


	const responseFacebook = async (response) => {
		console.log(response);

		const userData = {
			email: response.email,
			password: response.id + "Go"
		}



		await axios.post("http://localhost:4000/api/signin", { userData })
			.then(response =>
				displayMessage(response.data),

			)

		function displayMessage(data) {
			if (!data.success) {
				console.log(alert(data.error))
			}
			else {

				localStorage.setItem("token", data.response.token)
				swal({
					title: "Welcome",
					text: data.response.firstname + " " + data.response.lastname,
					icon: "success",

				});
			}

			dispatch({
				type: actionType.USER,
				user: data.response
			})
		}
	}

	const responseGoogle = async (response) => {
		console.log(response);

		const userData = {
			email: response.profileObj.email,
			password: response.googleId + "Go",
		}



		await axios.post("http://localhost:4000/api/signin", { userData })
			.then(response =>
				displayMessage(response.data),
			)
		function displayMessage(data) {
			if (!data.success) {
				console.log(alert(data.error))
			}
			else {
				console.log(data)
				localStorage.setItem("token", data.response.token)
				swal({
					title: "Welcome",
					text: data.response.firstname + " " + data.response.lastname,
					icon: "success",
				});
			}

			dispatch({
				type: actionType.USER,
				user: data.response
			})
		}
	}

	async function loginUser(event) {
		event.preventDefault()

		const userData = {
			email: event.target[0].value,
			password: event.target[1].value
		}
		await axios.post("http://localhost:4000/api/signin", { userData })
			.then(response =>
				displayMessage(response.data),
			)
		function displayMessage(data) {
			if (!data.success) {
				console.log(alert(data.error))
			}
			else {
				console.log(data.response)
				localStorage.setItem("token", data.response.token)
				swal({
					title: "Welcome",
					text: data.response.firstname + " " + data.response.lastname,
					icon: "success",
				});
			}
			dispatch({
				type: actionType.USER,
				user: data.response
			})
		}
		console.log(user)



	}

	return (


		<div className="container mt-5">
			<div className="d-flex justify-content-center ">
				<div className="card-signin">
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="social_icon">
							<span>

								<FacebookLogin
									appId="3512566545533638"
									autoLoad={false}
									callback={responseFacebook}
									fields="name,email,picture"

									render={renderProps => (
										<button onClick={renderProps.onClick} className="facebook-button-class" ><FaFacebookSquare /></button>
									)}
								/>
							</span>
							<span>
								<GoogleLogin
									clientId="852724625481-h33uc21h246f6lehumgddshi5kj5brrm.apps.googleusercontent.com"
									render={renderProps => (
										<button onClick={renderProps.onClick} className="google-button-class" > <FcGoogle /></button>
									)}
									buttonText="Login"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
								/>

							</span>

							<span><i className="fab fa-twitter-square"></i><FaTwitterSquare /></span>
						</div>
					</div>
					<div className="form">
						<form onSubmit={loginUser}>
							<div className="form-group">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<span className="fa fa-user"><FaUserAlt /></span>
										</span>
									</div>
									<input type="text" className="form-control" name="username" placeholder="Username" required="required" />
								</div>
							</div>
							<div className="form-group">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<span className="fa fa-lock"><FaKey /></span>
										</span>
									</div>
									<input type="password" className="form-control" name="password" placeholder="Password" required="required" />
								</div>
							</div>
							<div className="form-group remember">
								<label className="form-check-label"><input type="checkbox" />Remember Me</label>
							</div>

							<div className="form-group d-flex justify-content-center flex-direction-column ">
								<input type="submit" value="Login" className="btn float-right login_btn" />


							</div>



						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Don't have an account?<LinkRouter to='/signup'>Sign Up</LinkRouter>

						</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>

					</div>
				</div>
			</div>
		</div>

	)


}

export default SignIn