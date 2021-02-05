/**
 * Filename: user.actions.js
 * Author: Jose A Felix
 * Description: User actions redux file.
 *                  Defines how the actions should be
 */

// ----------------------------------------------------------------

/** setCurruentUser action */
export const setCurrentUser = (user) => ({
	type: "SET_CURRENT_USER",
	payload: user,
});
