/**
 * Filename: header.component.js
 * Author: Jose A Felix
 * Description: Header component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** Redux */

import { connect } from "react-redux";

// ----------------------------------------------------------------
/** Routing */

import { Link } from "react-router-dom";

// ----------------------------------------------------------------
/** Firebase */

import { auth } from "../../firebase/firebase.utils";

// ----------------------------------------------------------------
/** Styles */

import "./header.styles.scss";

// ----------------------------------------------------------------
/** Images */

import { ReactComponent as Logo } from "../../assets/crown.svg";

// ----------------------------------------------------------------

// Main component
const Header = ({ currentUser }) => {
	// Rendering component
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/sign">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

/**
 * mapStateToProps function
 * Allows to access the state, the root reducer
 * @param {object} state - The root reducer
 */
const mapStateToProps = (state) =>
	//debugger;
	({
		currentUser: state.hasOwnProperty("user") ? state.user.currentUser : null,
	});

// Exporting component
export default connect(mapStateToProps)(Header);
