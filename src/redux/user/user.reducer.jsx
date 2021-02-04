/**
 * Filename: user.reducer.jsx
 * Author: Jose A Felix
 * Description: User reducer redux file
 *                  Receives an action
 */

// ----------------------------------------------------------------

// User reducer initial state
const INITIAL_STATE = {
	currentUser: null,
};

/**
 * userReducer function
 * Helps to manage the actions corresponding to user matters
 * @param {object} state - the current state of the component
 * @param {object} action - the action that invoked the reducer intervention
 */
const userReducer = (state = INITIAL_STATE, action) => {
	// Based on the action type, render something
	switch (action.type) {
		case "SET_CURRENT_USER":
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