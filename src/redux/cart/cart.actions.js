/**
 * Filename: car.actions.js
 * Author: Jose A Felix
 * Description: Cart actions redux file
 */

// ----------------------------------------------------------------
/** Imports */

import { CartActionTypes } from "./cart.types";

// ----------------------------------------------------------------

/** displayCartDropdown action */
export const displayCartDropdown = () => ({
	type: CartActionTypes.DISPLAY_CART_DROPDOWN,
});

/** addItemToCart action */
export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item,
});
