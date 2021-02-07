/**
 * Filename: collection-item.component.jsx
 * Author: Jose A Felix
 * Description: Collection item component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Components */

import CustomButton from "../custom-button/custom-button.component";

// ----------------------------------------------------------------
/** Styles */

import "./collection-item.styles.scss";

// ----------------------------------------------------------------

// Main component
const CollectionItem = ({ id, name, price, imageUrl }) => {
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
               <CustomButton invertStyle>Add to cart</CustomButton>
		</div>
	);
};

// Exporting component
export default CollectionItem;
