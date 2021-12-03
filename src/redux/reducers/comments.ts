import {GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST, GET_COMMENTS_RESPONSE} from "../types/comments";
import {AnyAction} from "redux";


const initState = {
    loading: false,
    error: ``,
    comments: []
}

function commentReducer(state = initState, action: AnyAction) {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_COMMENTS_RESPONSE:
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
export default commentReducer