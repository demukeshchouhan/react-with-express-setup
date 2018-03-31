import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/";
import logger from "redux-logger";

const middleware = applyMiddleware(logger);
export default createStore(rootReducer, middleware);
