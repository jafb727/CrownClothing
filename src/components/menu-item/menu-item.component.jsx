/**
 * Filename: menu-item.component.js
 * Author: Jose A Felix
 * Description: MenuItem component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";

/** Styles */
import "./menu-item.styles.scss";

// ----------------------------------------------------------------

// Main component
const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

// Exporting component
export default MenuItem;
