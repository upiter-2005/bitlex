import { combineReducers } from "redux";

import currencies from './currencies';
import order from './order';
// import cart from './cart';

const rootReducer = combineReducers({
    currencies,
    order
});

export default rootReducer;