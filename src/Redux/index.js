import { applyMiddleware, combineReducers, createStore } from "redux"
import  createSagaMiddleware from "redux-saga";
import studReducer from "./reducers/studReducer";
import { watchergetStudSaga } from "./saga/getStudSaga";

const reducer = combineReducers({
    studReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const index = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watchergetStudSaga);
export default index;