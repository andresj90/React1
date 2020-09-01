import {FETCH_EPISODES_FAILURE,FETCH_EPISODES_SUCCESS,FETCH_EPISODES_REQUEST} from './episodeTypes'; 

export const fetchEpisodesRequest = () => {
    return {
        type: FETCH_EPISODES_REQUEST, 
        payload: {
            isLoading : true
        }
    }
}

export const fetchEpisodesSuccess = (episodes) => {
    return {
        type: FETCH_EPISODES_SUCCESS, 
        payload: {
            episodes : episodes
        }
    }
}



export const fetchEpisodesFailure = (error) => {
    return {
        type: FETCH_EPISODES_FAILURE, 
        payload: {
            error : error
        }
    }
}

export const fetchEpisodeList = () => {
    return (dispatch) => {
        fetch('http://api.tvmaze.com/shows/2993/episodes').then(response => {
            dispatch(fetchEpisodesRequest);   
            return response.json()
        }).then(episodeList => {
            dispatch(fetchEpisodesSuccess(episodeList)); 
            console.log(episodeList);
        }).catch(error => {
            dispatch(fetchEpisodesFailure(error.message));
        } )
    }
} 