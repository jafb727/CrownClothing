/**
 * Filename: menu-item.component.js
 * Author: Jose A Felix
 * Description: Menu item component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { withRouter } from "react-router-dom";

/** Styles */
import "./menu-item.styles.scss";

// ----------------------------------------------------------------

// Main component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	// Rendering component
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
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
export default withRouter(MenuItem);
