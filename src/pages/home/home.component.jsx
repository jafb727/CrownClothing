/**
 * Filename: home.component.jsx
 * Author: Jose A Felix
 * Description: Home component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Components */

import Directory from "../../components/directory/directory.component";

/** Styles */
import "./home.styles.scss";

// ----------------------------------------------------------------

// Main component
const Home = () => {
	// Rendering component
	return (
		<div className="home">
			<Directory />
		</div>
	);
};

// Exporting component
export default Home;
