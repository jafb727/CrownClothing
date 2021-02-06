/**
 * Filename: cart.reducer.jsx
 * Author: Jose A Felix
 * Description: Cart reducer redux file
 */

// ----------------------------------------------------------------
/** Imports */

import { CartActionTypes } from "./cart.types";

// ----------------------------------------------------------------

const INITIAL_STATE = {
	displayCartDropdown: false,
};

/**
 * cartReducer function
 * Helps to manage the actions corresponding to cart
 * @param {object} state - the current state of the component
 * @param {object} action - the action that invoked the reducer intervention
 */
const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.DISPLAY_CART_DROPDOWN:
			return {
				...state,
				displayCartDropdown: !state.displayCartDropdown,
			};

		default:
			return state;
	}
};

// Exporting reducer
export default cartReducer;
