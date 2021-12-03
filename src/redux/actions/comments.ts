import {GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST, GET_COMMENTS_RESPONSE} from "../types/comments";
import CommentsService from "../../services/comments.services";


export const commentsResponse = (comments:any) => {
    return {
        type: GET_COMMENTS_RESPONSE,
        payload: comments,
    }
}

export const commentsError = (error:any) => {
    return {
        type: GET_COMMENTS_ERROR,
        payload: error,
    }
}

export const commentsRequest = () => {
    return {
        type: GET_COMMENTS_REQUEST,
    }
}

export const getComments = (data:any) => {
    return async (dispatch:any) => {
        dispatch(commentsRequest())
        try {
            const res = await CommentsService.getComments(data)
            if (!res) {
                throw new Error(res.message)
            }
            dispatch(commentsResponse(res))
        } catch (e) {
            console.log(e)
            dispatch(commentsError(e))
        }
    }
}