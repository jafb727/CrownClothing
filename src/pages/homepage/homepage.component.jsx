/**
 * Filename: homepage.component.jsx
 * Author: Jose A Felix
 * Description: home page component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import Directory from "../../components/directory/directory.component";

/** Styles */
import "./homepage.styles.scss";

// ----------------------------------------------------------------

// Main component
const HomePage = () => {
	// Rendering component
	return (
		<div className="home">
			<Directory />
		</div>
	);
};

// Exporting component
export default HomePage;
