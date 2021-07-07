import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
};

const store = createStore(combineReducers({ reducer }), applyMiddleware(thunk));

export default store;
