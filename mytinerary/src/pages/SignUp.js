import React from "react";
import '../styles/signup.css';
import { Link as LinkRouter } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

function SignUp() {
	return (


		<div className="container d-flex col-6 mt-5">
			<div className="signup-form  ">
				<form action="" method="post">
					<h2>Sign Up</h2>
					<p>Please fill in this form to create an account!</p>

					<div className="form-group rounded">
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
									<span className="fa fa-paper-plane"><FaPaperPlane /></span>
								</span>
							</div>
							<input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-lock"><FaLock /></span>
								</span>
							</div>
							<input type="text" className="form-control" name="password" placeholder="Password" required="required" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-check"><FaCheck /></span>
								</span>
							</div>
							<input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
						</div>
					</div>
					<div className="form-group">
						<label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
					</div>
					<div className="form-group d-flex justify-content-center ">
						<button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
					</div>
				</form>
				<div className="text-center">Already have an account?<LinkRouter to='/sign'><a href="#">Sign In</a></LinkRouter></div>
			</div>
		</div>

	)


}

export default SignUp;