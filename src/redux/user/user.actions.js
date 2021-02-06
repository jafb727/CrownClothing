/**
 * Filename: user.actions.js
 * Author: Jose A Felix
 * Description: User actions redux file.
 *                  Defines how the actions should be
 */

// ----------------------------------------------------------------
/** Imports */

import { UserActionTypes } from "./user.types";

// ----------------------------------------------------------------

/** setCurruentUser action */
export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
