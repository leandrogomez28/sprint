import React from "react";
import '../styles/signup.css';
import { Link as LinkRouter } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

function SignUp() {
	return (


		<div className="container mt-5">
			<div class="signup-form">
				<form action="" method="post">
					<h2>Sign Up</h2>
					<p>Please fill in this form to create an account!</p>

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
									<span class="fa fa-paper-plane"><FaPaperPlane /></span>
								</span>
							</div>
							<input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">
									<span class="fa fa-lock"><FaLock /></span>
								</span>
							</div>
							<input type="text" class="form-control" name="password" placeholder="Password" required="required" />
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">
									<span class="fa fa-check"><FaCheck /></span>
								</span>
							</div>
							<input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
						</div>
					</div>
					<div class="form-group">
						<label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
					</div>
					<div class="form-group d-flex justify-content-center ">
						<button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
					</div>
				</form>
				<div class="text-center">Already have an account?<LinkRouter to='/sign'><a href="#">Sign In</a></LinkRouter></div>
			</div>
		</div>

	)


}

export default SignUp;