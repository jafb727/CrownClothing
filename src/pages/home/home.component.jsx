/**
 * Filename: home.component.jsx
 * Author: Jose A Felix
 * Description: home component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
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
