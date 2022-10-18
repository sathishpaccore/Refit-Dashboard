import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";

const myReducers = allReducers();

const middleware = [ thunk ];
let enhancers = compose(applyMiddleware(thunk));
let store = createStore(
    myReducers,
    compose(enhancers, applyMiddleware(...middleware)),
);

export default store;