/**
 * Filename: index.js
 * Author: Jose A Felix
 * Description: index component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import "./App.css";
import Home from "./pages/home/home.component";

// ----------------------------------------------------------------

// Main component
function App() {
	return (
		<div>
			<Home />
		</div>
	);
}

// Exporting component
export default App;
