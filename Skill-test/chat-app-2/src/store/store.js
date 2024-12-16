import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger";

import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducers";

let store;
export function configureStore() {
    store = createStore(rootReducers, applyMiddleware(thunk, logger));
    return store;
}