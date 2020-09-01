import {combineReducers} from 'redux'; 

import showReducer from './show/showReducer'; 
import episodeReducer from './episode/episodeReducer';

 const rootReducer = combineReducers({
    showcast: showReducer, 
    episode : episodeReducer
})

export default rootReducer;