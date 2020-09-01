import {
    FETCH_SHOW_CAST_REQUEST, 
    FETCH_SHOW_CAST_SUCCESS, 
    FETCH_SHOW_CAST_FAILURE,
    FETCH_SHOW_DETAILS_REQUEST,
    FETCH_SHOW_DETAILS_SUCCESS,
    FETCH_SHOW_DETAILS_FAILURE
} from './showTypes';


export const fetchShowRequest = () => {
    return {
        type: FETCH_SHOW_CAST_REQUEST,
        payload : {
            isLoading: true
        }
    }
}

export const fetchShowRequestSucces = (cast) => {
    return {
        type: FETCH_SHOW_CAST_SUCCESS, 
        payload : {
            cast : cast
        }
    }
}

export const fetchShowRequestFailure = (error) => {
    return {
        type: FETCH_SHOW_CAST_FAILURE, 
        payload : {
            error: error
        }
    }
}

// actions for the show info  

export const fetchShowDetailsRequest = () => {
    return {
        type: FETCH_SHOW_DETAILS_REQUEST,
        payload: {
            isLoading : true
        }
    }
}

export const fetchShowDetailsSuccess = (showInfo) => {
    return {
        type: FETCH_SHOW_DETAILS_SUCCESS, 
        payload: {
          show: showInfo
        }
    }
}

export const fetchShowDetailsFailure = (error) => {
    return {
        type: FETCH_SHOW_DETAILS_FAILURE, 
        payload: {
            error: error
        }
    }
}


export const fetchShowInfo = () => {
    return (dispatch) => {
        dispatch(fetchShowRequest()); 
        fetch('http://api.tvmaze.com/shows/2993/cast').then((response) => {
           return response.json();  
            
        }).then((cast) => {
            console.log(cast);
            dispatch(fetchShowRequestSucces(cast));    
        }).catch(error => {
            dispatch(fetchShowRequestFailure(error.message));
        })
    }
}


export const fetchShowDetails = () => {
    return (dispatch) => {
        dispatch(fetchShowDetailsRequest); 
        fetch('http://api.tvmaze.com/shows/2993').then((response) => {
            return response.json(); 
        }).then(showInfo => {
            dispatch(fetchShowDetailsSuccess(showInfo)); 
        }).catch(error => {
            dispatch(fetchShowDetailsFailure(error.message));
        })
    }
}


// export default fetchShowInfo;