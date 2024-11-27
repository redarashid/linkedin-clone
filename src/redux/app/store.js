import { createStore, applyMiddleware } from "redux";
import {thunk } from "redux-thunk";

//  يُمثل مجمع Reducers (دالة واحدة تجمع كل Reducers التي تُدير حالات مختلفة في التطبيق).
import rootReducer from "../reducer";

const store = createStore(rootReducer, applyMiddleware(thunk ));

export default store;



