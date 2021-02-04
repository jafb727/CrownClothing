/**
 * Filename: sign.component.jsx
 * Author: Jose A Felix
 * Description: Sig in and sign up component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Components */

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

// ----------------------------------------------------------------
/** Styles */

import "./sign.styles.scss";

// ----------------------------------------------------------------

// Main component
const Sign = () => {
	// Rendering component
	return (
		<div className="sign">
			<SignIn />
			<SignUp />
		</div>
	);
};

// Exporting component
export default Sign;
