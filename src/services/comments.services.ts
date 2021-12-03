import axios from 'axios'
export interface ICommentsRequest {
    page: number
    perPage: number
    additionalSkip: number
}

class CommentsService {

    public static getComments(data:ICommentsRequest) {
        return axios
            .get(`http://localhost:5000/comment?page=${data.page}&perPage=${data.perPage}&additionalSkip=${data.additionalSkip}`, {})
            .then((res) => {
                return res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default CommentsService
