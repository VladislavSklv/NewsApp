import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

interface IAction {
    type: string;
    payload?: any;
}

const defaultState = {
    news: [],
}
const reducer = (state: {} = defaultState, action: IAction) => {
    switch (action.type) {
        case '1':
            return {...state, news: [...action.payload]};
    
        default:
            return state;
    }
}
export const store = createStore(reducer, applyMiddleware(thunk));