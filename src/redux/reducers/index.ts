import { combineReducers } from 'redux'
import commentReducer from "./comments";

const rootReducer = combineReducers({
    comment: commentReducer,
})

export default rootReducer