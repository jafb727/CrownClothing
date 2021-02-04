/**
 * Filename: firebase.utils.js
 * Author: Jose A Felix
 * Description: Firebase utils config file
 * Notes: Firestore request returns always two types of objetcs: references and snaphots
 *           Both can be a collection or a document
 */

// ----------------------------------------------------------------
/** Imports */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// ----------------------------------------------------------------
/** Configuration */

// Firebase configuration from the jafb737 account
const config = {
	apiKey: "AIzaSyDR75rfpM6iShWrg3qE3OwkslwGt9_2C_8",
	authDomain: "crown-db-49e93.firebaseapp.com",
	projectId: "crown-db-49e93",
	storageBucket: "crown-db-49e93.appspot.com",
	messagingSenderId: "91007692514",
	appId: "1:91007692514:web:034548cc0e9df65b6eb8bb",
};

// Initializaing Firebase
firebase.initializeApp(config);

// ----------------------------------------------------------------
/** Exports  */

// Firebase main objects
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * This method sends a request to Firebase to save a user into database
 * @param {object} userAuth - Contains information for the user logged in the application
 * @param {object} additionalData - If any additional information needs to be added in firebase document
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// In case no user is logged
	if (!userAuth) {
		return;
	}

	// User is logged. We make a request to Firebase
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	// Create a user in Firebase /users collection
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

/** Google authentication  */
// Export Google authentication
// Popup Google popup whenever this provider is used for authentication and sig in
// Just one to authenticate in a popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// ----------------------------------------------------------------

// In case we want the whole library
export default firebase;
