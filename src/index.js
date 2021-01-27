/**
 * Filename: index.js
 * Author: Jose A Felix
 * Description: index component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";

/** Stylsheets */
import "./index.css";

// ----------------------------------------------------------------

// Main component
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
