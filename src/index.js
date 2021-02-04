/**
 * Filename: index.js
 * Author: Jose A Felix
 * Description: Index component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";
import ReactDOM from "react-dom";

// ----------------------------------------------------------------
/** Routing */

import { BrowserRouter } from "react-router-dom";

// ----------------------------------------------------------------
/** Redux */

import { Provider } from "react-redux";
import store from "./redux/store";

// ----------------------------------------------------------------
/** Components */

import App from "./components/app/app.component";

// ----------------------------------------------------------------
/** Stylsheets */

import "./index.css";

// ----------------------------------------------------------------

// Main component
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
