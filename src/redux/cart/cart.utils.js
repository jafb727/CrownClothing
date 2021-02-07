import { addItemToCart } from "./cart.actions";

/**
 * Filename: car.utils.js
 * Author: Jose A Felix
 * Description: Cart utils redux file
 */

// ----------------------------------------------------------------

// addItemToCart function
export const addItemToCartAux = (itemsInsideTheCart, itemToAdd) => {
     // Checking item existance inside cart
	const existingItemInCart = itemsInsideTheCart.find(
		(item) => item.id === itemToAdd.id
	);

	if (existingItemInCart) {
		// This is done because always have to return something
		// in order to maintain our store updated
		return itemsInsideTheCart.map((item) =>
			item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

     // In any case the item is not inside the cart
	return [...itemsInsideTheCart, { ...itemToAdd, quantity: 1 }];
};
