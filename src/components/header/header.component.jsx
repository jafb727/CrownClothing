/**
 * Filename: header.component.js
 * Author: Jose A Felix
 * Description: Header component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

/** Styles */
import "./header.styles.scss";

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

// Exporting component
export default Header;
