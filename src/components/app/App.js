/**
 * Filename: index.js
 * Author: Jose A Felix
 * Description: index component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home.component";
import Shop from "../../pages/shop/shop.component";

/** Stylesheets */
import "./App.css";

// ----------------------------------------------------------------

// Main component
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

// Exporting component
export default App;
