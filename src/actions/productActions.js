import {
<<<<<<< HEAD
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL,
=======
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
>>>>>>> 893ee60 (refactor file name)
} from '../constants/todoConstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try{
        dispatch({type: TODO_LIST_REQUEST})

        const { data } = await axios.get('http://127.0.0.1:8000/api/todo/products')

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