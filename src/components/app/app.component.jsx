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
import { auth } from "../../firebase/firebase.utils";

/** Stylesheets */
import "./app.styles.scss";

// ----------------------------------------------------------------

// Main component
class App extends React.Component {
	// Constructor
	constructor() {
		super();

		// Component state
		this.state = {
			currentUser: null,
		};
	}

	// ----------------------------------------------------------------
	/** Lifecycle methods */

	// This property handles the unsubscribing mehotd
	unsubscribeFromAuth = null;

	// componentDidMount
	componentDidMount() {
		// This is to maintain up to date firebase with any change in the application
		// So we need to implement a subscription
		// Login session persists until the app component is attached to the DOM
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	// componentWillUnmount
	componentWillUnmount() {
		// This stops susbscription to Google oAuth
		this.unsubscribeFromAuth();
	}

	// ----------------------------------------------------------------

	// Rendering component
	render() {
		const { currentUser } = this.state;

		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route path="/sign" component={Sign} />
				</Switch>
			</div>
		);
	}
}

// Exporting component
export default App;
