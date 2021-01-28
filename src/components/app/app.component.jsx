/**
 * Filename: app.component.jsx
 * Author: Jose A Felix
 * Description: App component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home.component";
import Shop from "../../pages/shop/shop.component";
import Header from "../header/header.component";
import Sign from "../../pages/sign/sign.component";

/** Stylesheets */
import "./app.styles.scss";

// ----------------------------------------------------------------

// Main component
function App() {
	// Rendering component
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/sign" component={Sign} />
			</Switch>
		</div>
	);
}

// Exporting component
export default App;
