/**
 * Filename: shop.component.jsx
 * Author: Jose A Felix
 * Description: Shop component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** JSON data */

import SHOP_DATA from "./shop.data";

// ----------------------------------------------------------------
/** Components */

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// ----------------------------------------------------------------

// Main component
class Shop extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		// Component state
		this.state = {
			collections: SHOP_DATA,
		};
	}

	// ----------------------------------------------------------------

	// Rendering component
	render() {
          // State deconstructed
		const { collections } = this.state;

		return (
			<div className="shop">
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}

// Exporting component
export default Shop;
