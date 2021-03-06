/**
 * Filename: custom-button.component.jsx
 * Author: Jose A Felix
 * Description: Custom button component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Styles */

import "./custom-button.styles.scss";

// ----------------------;------------------------------------------

// Main component
const CustomButton = ({ children, isGoogleSignIn, invertedStyle, ...buttonProps }) => {
	// Rendering component
	return (
		<button
			className={`${invertedStyle ? "invertedStyle" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

// Exporting component
export default CustomButton;
