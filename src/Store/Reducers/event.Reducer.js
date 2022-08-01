import { ADD_EVENT_ACTION, APPROVE_EVENT_ACTION, CANCEL_EVENT_ACTION, GET_EVENTS_ACTION, LOAD_EVENTS_ACTION, REJECT_EVENT_ACTION, UPDATE_EVENT_ACTION } from "../../Constants/event.ActionTypes";

const Initial_EVENT = [];

function eventReducer (state=Initial_EVENT,action){
        switch(action.type){
        case LOAD_EVENTS_ACTION:
            return state;
        case GET_EVENTS_ACTION:
            return state;
        case ADD_EVENT_ACTION:
            return [...state,action.payload];
        case UPDATE_EVENT_ACTION:
            const newState = [...state];
            const eventIndex = newState.findIndex((event)=>event._id===action.payload._id);
            newState[eventIndex] = action.payload;
            return newState;
        case APPROVE_EVENT_ACTION:
        case REJECT_EVENT_ACTION:
        case CANCEL_EVENT_ACTION:
            default:
                return state;
    }
    
}
export default eventReducer;