/**
 * Filename: collection-item.component.jsx
 * Author: Jose A Felix
 * Description: Collection item component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Redux */

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

// ----------------------------------------------------------------
/** Components */

import CustomButton from "../custom-button/custom-button.component";

// ----------------------------------------------------------------
/** Styles */

import "./collection-item.styles.scss";

// ----------------------------------------------------------------

// Main component
const CollectionItem = ({ item, addItemToCart }) => {
	// Descontructing item
	const { id, name, price, imageUrl } = item;

	// Rendering component
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton invertedStyle onClick={() => addItemToCart(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});

// Exporting component
export default connect(null, mapDispatchToProps)(CollectionItem);
