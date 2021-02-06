/**
 * Filename: sign-up.component.jsx
 * Author: Jose A Felix
 * Description: Sign up component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Firebase */

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// ----------------------------------------------------------------
/** Components */

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// ----------------------------------------------------------------
/** Styles */

import "./sign-up.styles.scss";

// ----------------------------------------------------------------

// Main component
class SignUp extends React.Component {
	// Constructor
	constructor() {
		super();

		// Component state
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	// ----------------------------------------------------------------
	/** Functions */

	/**
	 * onSubmitSign function
	 * Helps to submit the form to store a user in Firebase
	 * @param {object} event - The DOM lelement triggering the event
	 */
	onSubmitSign = async (event) => {
		// Synthetic event. Looks like JavaScript
		event.preventDefault();

		// Deconstructing state
		const { displayName, email, password, confirmPassword } = this.state;

		// Validating password
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			// Creating user from email and password
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			// Creating user document in Firebase
			await createUserProfileDocument(user, { displayName });

			// Reseting values in state for a new user
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * onFieldChange function
	 * Helps to update the component state with the information typed by user
	 * @param {object} event - The DOM lelement triggering the event
	 */
	onFieldChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	// ----------------------------------------------------------------
	// Rendering component
	render() {
		// State deconstructed
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.onSubmitSign}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.onFieldChange}
						label="Display name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.onFieldChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.onFieldChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.onFieldChange}
						label="Confirm password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

// Exporting component
export default SignUp;
