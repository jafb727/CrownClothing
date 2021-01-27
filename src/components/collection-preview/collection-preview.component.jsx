/**
 * Filename: collection-preview.component.js
 * Author: Jose A Felix
 * Description: Collection preview component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

/** Styles */
import "./collection-preview.styles.scss";

// ----------------------------------------------------------------

// Main component
const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview ">
			<div className="title">{title}</div>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...itemProps }) => (
						<CollectionItem key={id} {...itemProps} />
					))}
			</div>
		</div>
	);
};

// Exporting component
export default CollectionPreview;