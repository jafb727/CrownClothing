/**
 * Filename: app.component.jsx
 * Author: Jose A Felix
 * Description: App component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Routing */

import { Switch, Route, Redirect } from "react-router-dom";

// ----------------------------------------------------------------
/** Firebase */

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// ----------------------------------------------------------------
/** Redux */

import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

// ----------------------------------------------------------------
/** Components */

import Home from "../../pages/home/home.component";
import Shop from "../../pages/shop/shop.component";
import Header from "../header/header.component";
import Sign from "../../pages/sign/sign.component";

// ----------------------------------------------------------------
/** Stylesheets */

import "./app.styles.scss";

// ----------------------------------------------------------------

// Main component
class App extends React.Component {
	// ----------------------------------------------------------------
	/** Lifecycle methods */

	// This property handles the unsubscribing mehotd
	unsubscribeFromAuth = null;

	// componentDidMount
	componentDidMount() {
		const { setCurrentUser } = this.props;

		// This is to maintain up to date firebase with any change in the application
		// So we need to implement a subscription
		// Login session persists until the app component is attached to the DOM
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// If DB has been updated
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});

				// Set currentUser to null in case is userAuth is null
				setCurrentUser(userAuth);
			}
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
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route
						exact
						path="/sign"
						render={(user) =>
							this.props.currentUser ? <Redirect to="/" /> : <Sign />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

// Exporting component
export default connect(mapStateToProps, mapDispatchToProps)(App);
