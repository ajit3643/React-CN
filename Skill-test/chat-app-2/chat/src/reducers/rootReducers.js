import { combineReducers } from "redux"
import contacts from "./contactReducer";

import user from "./user";

export default combineReducers({contacts, user});