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


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return { loading: true, products: [] }

        case TODO_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload}

        case TODO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}