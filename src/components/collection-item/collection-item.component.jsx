/**
 * Filename: collection-item.component.jsx
 * Author: Jose A Felix
 * Description: Collection item component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";

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
		</div>
	);
};

export default CollectionItem;
