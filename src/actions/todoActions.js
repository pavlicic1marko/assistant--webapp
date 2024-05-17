import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL,

} from '../constants/todoConstants'
import axios from 'axios'



export const listTodo = () => async (dispatch, getState) => {

    const {
        userLogin: { userInfo },
    } = getState()
    
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    
    try{
        dispatch({type: TODO_LIST_REQUEST})


        const { data } = await axios.get('http://127.0.0.1:8001/api/todo/products', config           )

        dispatch({
            type: TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}