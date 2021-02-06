/**
 * Filename: sign-in.component.jsx
 * Author: Jose A Felix
 * Description: Sign in component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Firebase */

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

// ----------------------------------------------------------------
/** Components */

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

// ----------------------------------------------------------------
/** Styles */

import "./sign-in.styles.scss";

// ----------------------------------------------------------------

// Main component
class SignIn extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		// Component state
		this.state = {
			email: "",
			password: "",
		};
	}

	// ----------------------------------------------------------------
	/** Functions */

	/**
	 * onSubmitSign function
	 * Handles the form submition event
	 * @param {object} event - the DOM element that triggered the event
	 */
	onSubmitSign = async (event) => {
		event.preventDefault();

		// Descontructing state
		const { email, password } = this.state;

		try {
			// Invoking signing with email and password
			await auth.signInWithEmailAndPassword(email, password);

			// Reseting state
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * onFieldChange function
	 * Handles the field chaging event
	 * @param {object} event - the DOM element that triggered the event
	 */
	onFieldChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value,
		});
	};

	// ----------------------------------------------------------------

	// Rendering component
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.onSubmitSign}>
					<FormInput
						name="email"
						type="email"
						label="email"
						onFieldChange={this.onFieldChange}
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="password"
						value={this.state.password}
						onFieldChange={this.onFieldChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

// Exporting component
export default SignIn;
