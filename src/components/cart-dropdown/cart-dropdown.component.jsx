/**
 * Filename: cart-dropdown.component.js
 * Author: Jose A Felix
 * Description: Cart dropdown component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Components */

import CustomButtom from "../custom-button/custom-button.component";

// ----------------------------------------------------------------
/** Styles */

import "./cart-dropdown.styles.scss";

// ----------------------------------------------------------------

// Main component
const CartDropdown = () => {
	// Rendering component
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<CustomButtom>GO TO CHECKOUT</CustomButtom>
			</div>
		</div>
	);
};

// Exporting component
export default CartDropdown;
