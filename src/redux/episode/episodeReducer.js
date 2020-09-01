import {FETCH_EPISODES_FAILURE,FETCH_EPISODES_SUCCESS,FETCH_EPISODES_REQUEST} from './episodeTypes'; 

const initialState =  {
    isLoading : true, 
    episodeList : [],
    error : ''
}

const episodeReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_EPISODES_REQUEST : {
            return {
               ...state, 
            }
        }
        case FETCH_EPISODES_SUCCESS : {
            return {
                ...state,
                isLoading : false, 
                episodeList : action.payload.episodes
            }
        }

        case FETCH_EPISODES_FAILURE : {
            return {
                ...state,
                isLoading : false, 
                error : action.payload.error
            }
        }
        default : 
          return state;
    }
}

export default episodeReducer;