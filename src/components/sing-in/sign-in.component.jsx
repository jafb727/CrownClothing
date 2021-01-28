/**
 * Filename: sign-in.component.jsx
 * Author: Jose A Felix
 * Description: Sign in component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

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
	 * onSubmitSign
	 * Handles the form submition event
	 * @param {object} event - the DOM element that triggered the event
	 */
	onSubmitSign = (event) => {
		event.preventDefault();

		this.setState({
			email: "",
			password: "",
		});
	};

	/**
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
						value={this.state.email}
						onFieldChange={this.onFieldChange}
						required
					/>
					<CustomButton type="submit">Sign in</CustomButton>
				</form>
			</div>
		);
	}
}

// Exporting component
export default SignIn;
