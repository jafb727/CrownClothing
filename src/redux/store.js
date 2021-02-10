/**
 * Filename: root-reducer.js
 * Author: Jose A Felix
 * Description: Store redux file.
 *                  Represents all application's state
 */

// ----------------------------------------------------------------
/** Imports */

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// ----------------------------------------------------------------
/** Reducers */

import rootReducer from "./root-reducer";

// ----------------------------------------------------------------
/** Setting up middlewares */

const middlewares = [];

// Conditionally adding looger just in a development enviroment
if ((process.env.NODE_ENV = "development")) {
	middlewares.push(logger);
}

// ----------------------------------------------------------------
/** Store */

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Exporting store
export default store;
