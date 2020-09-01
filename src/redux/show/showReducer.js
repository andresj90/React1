import { act } from 'react-dom/test-utils';
import { FETCH_SHOW_CAST_REQUEST, 
    FETCH_SHOW_CAST_SUCCESS, 
    FETCH_SHOW_CAST_FAILURE,
    FETCH_SHOW_DETAILS_REQUEST,
    FETCH_SHOW_DETAILS_SUCCESS,
    FETCH_SHOW_DETAILS_FAILURE } from './showTypes';

const initialState = {
    show: {},
    cast: [],
    isLoadingCast: true,
    isLoadingShow: true,
    errorMessage: ''
}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHOW_CAST_REQUEST : {
            return {
                ...state,
                isLoadingCast: action.type.isLoading
            }
        }
        case FETCH_SHOW_CAST_SUCCESS : {
            return {
                ...state, 
                isLoadingCast: false, 
                cast: action.payload.cast
            }
        }
        case FETCH_SHOW_CAST_FAILURE: {
            return {
                ...state, 
                isLoadingCast: false, 
                errorMessage: action.payload.error
            }
        }
      
        case FETCH_SHOW_DETAILS_REQUEST: {
            return {
                ...state 
            }
        } 

        case FETCH_SHOW_DETAILS_SUCCESS : {
            return {
                ...state, 
                isLoadingShow : false, 
                show : action.payload.show
            }
        }

        case FETCH_SHOW_DETAILS_FAILURE: {
            return {
                ...state, 
                isLoadingShow : false, 
                errorMessage: action.payload.error
            }
        }

        default : 
         return state;
    }
}

export default showReducer;