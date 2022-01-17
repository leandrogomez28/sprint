import React from "react";
import '../styles/signin.css'
import { Link as LinkRouter } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

function SignIn() {
	return (


		<div className="container mt-5">
			<div className="d-flex justify-content-center ">
				<div className="card-signin">
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="social_icon">
							<span><i className="fab fa-facebook-square"></i><FaFacebookSquare /></span>
							<span><i className="fab fa-google-plus-square"></i><FaGooglePlusSquare /></span>
							<span><i className="fab fa-twitter-square"></i><FaTwitterSquare /></span>
						</div>
					</div>
					<div className="form">
						<form>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<span class="fa fa-user"><FaUserAlt /></span>
										</span>
									</div>
									<input type="text" class="form-control" name="username" placeholder="Username" required="required" />
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<span class="fa fa-lock"><FaKey /></span>
										</span>
									</div>
									<input type="text" class="form-control" name="password" placeholder="Password" required="required" />
								</div>
							</div>
							<div class="form-group remember">
								<label class="form-check-label"><input type="checkbox" required="required" />Remember Me</label>
							</div>
							
							<div className="form-group d-flex justify-content-center ">
								<input type="submit" value="Login" className="btn float-right login_btn" />
							</div>
						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Don't have an account?<LinkRouter to='/signup'><a href="#">Sign Up</a></LinkRouter>
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