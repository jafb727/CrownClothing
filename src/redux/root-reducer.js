/**
 * Filename: root-reducer.js
 * Author: Jose A Felix
 * Description: Root reducer  reduxfile.
 *                  Represents all redcuers in the application
 */

// ----------------------------------------------------------------
/** Imports */

import { combineReducers } from "redux";

// ----------------------------------------------------------------
/** Reducers */

import userReducer from "./user/user.reducer";

// ----------------------------------------------------------------

// Exporting root reducer
export default combineReducers({
	user: userReducer,
});
