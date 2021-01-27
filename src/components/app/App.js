/**
 * Filename: index.js
 * Author: Jose A Felix
 * Description: index component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/homepage/homepage.component";

/** Stylesheets */
import "./App.css";

// ----------------------------------------------------------------

const HatsPage = () => {
	return (
		<div>
			<h1>HATS</h1>
		</div>
	);
};

// Main component
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

// Exporting component
export default App;
