import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/index";
import { persistStore } from "redux-persist";

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

export default { store, persistor: persistStore(store) };
