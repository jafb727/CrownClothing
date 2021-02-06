/**
 * Filename: cart-icon.component.jsx
 * Author: Jose A Felix
 * Description: Cart icon component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Redux */

import { connect } from "react-redux";
import { displayCartDropdown } from "../../redux/cart/cart.actions";

// ----------------------------------------------------------------
/** Styles */

import "./cart-icon.styles.scss";

// ----------------------------------------------------------------
/** Images */

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// ----------------------------------------------------------------

// Main component
const CartIcon = ({ displayCartDropdown }) => {
	// Rendering component
	return (
		<div className="cart-icon" onClick={displayCartDropdown}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	displayCartDropdown: () => dispatch(displayCartDropdown()),
});

// Exporting component
export default connect(null, mapDispatchToProps)(CartIcon);
