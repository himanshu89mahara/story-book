import { combineReducers } from "redux";
import eventReducer from "./event.Reducer";

const reducer = combineReducers({
    events:eventReducer
    
});
export default reducer;
