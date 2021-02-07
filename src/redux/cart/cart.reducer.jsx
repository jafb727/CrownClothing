/**
 * Filename: cart.reducer.jsx
 * Author: Jose A Felix
 * Description: Cart reducer redux file
 */

// ----------------------------------------------------------------
/** Imports */

import { CartActionTypes } from "./cart.types";
import { addItemToCartAux } from "./cart.utils";

// ----------------------------------------------------------------

const INITIAL_STATE = {
	displayCartDropdown: false,
	itemsInsideTheCart: [],
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

		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				itemsInsideTheCart: addItemToCartAux(
					state.itemsInsideTheCart,
					action.payload
				),
			};

		default:
			return state;
	}
};

// Exporting reducer
export default cartReducer;
