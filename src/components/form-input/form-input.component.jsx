/**
 * Filename: form-input.component.jsx
 * Author: Jose A Felix
 * Description: Form input component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Styles */

import "./form-input.styles.scss";

// ----------------------------------------------------------------

// Main component
const FormInput = ({ onFieldChange, label, ...inputProps }) => {
	// Rendering component
	return (
		<div className="group">
			<input className="form-input" onChange={onFieldChange} {...inputProps} />
			{label ? (
				<label className={`${inputProps.value.length ? "shrink" : "form-input-label"}`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

// Exporting component
export default FormInput;
