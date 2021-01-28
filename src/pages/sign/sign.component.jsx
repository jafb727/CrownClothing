/**
 * Filename: sign.component.jsx
 * Author: Jose A Felix
 * Description: Sig in and sign up component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import SignIn from "../../components/sing-in/sign-in.component";

/** Styles */
import "./sign.styles.scss";

// ----------------------------------------------------------------

// Main component
const Sign = () => {
	// Rendering component
	return (
		<div className="sign">
			<SignIn />
		</div>
	);
};

// Exporting component
export default Sign;
