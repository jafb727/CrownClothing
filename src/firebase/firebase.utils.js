/**
 * Filename: firebase.utils.js
 * Author: Jose A Felix
 * Description: Firebase utils config file
 */

// ----------------------------------------------------------------

/** Dependencies */
import firebase from "firebase/app";

// Importing just the modules needed in our project
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDR75rfpM6iShWrg3qE3OwkslwGt9_2C_8",
	authDomain: "crown-db-49e93.firebaseapp.com",
	projectId: "crown-db-49e93",
	storageBucket: "crown-db-49e93.appspot.com",
	messagingSenderId: "91007692514",
	appId: "1:91007692514:web:034548cc0e9df65b6eb8bb",
};

// Firestore request retunrs alwalys two types of objetcs: references and snaphots.name
// Both can be a collection or a document
/**
 * This methods sends a request to Firebase to save a user into database
 * @param {object} userAuth - contains information for the user logged in the application
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     

	// Create a piece of data
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

firebase.initializeApp(config);

// Needed to export the modules from the firebase condiguration received
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Export Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// Popup Google popup whenever this provider is used for authentication and sig in
provider.setCustomParameters({ prompt: "select_account" });
// Just one to authenticate in a popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// In case we want the whole library
export default firebase;
