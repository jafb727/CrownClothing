/**
 * Filename: user.reducer.jsx
 * Author: Jose A Felix
 * Description: User reducer redux file
 */

// ----------------------------------------------------------------
/** Imports */

import { UserActionTypes } from "./user.types";

// ----------------------------------------------------------------

// Reducer initial state
const INITIAL_STATE = {
	currentUser: null,
};

/**
 * userReducer function
 * Helps to manage the actions corresponding to user
 * @param {object} state - the current state of the component
 * @param {object} action - the action that invoked the reducer intervention
 */
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

// Exporting reducer
export default userReducer;
