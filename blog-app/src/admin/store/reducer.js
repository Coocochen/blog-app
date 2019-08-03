import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false,
	titlelist: [],
	edited: false,
    tags: ["2","3"],
})

export default (state=defaultState,action) =>{
    switch(action.type){
    	case constants.CHANGE_LOGIN:
    	    return state.merge({
    	    	login: fromJS(action.login),
    	    })
    	case constants.INIT_TITLELIST:
    	    return state.merge({
    	    	titlelist: fromJS(action.data),
    	    })
    	case constants.CLICK_EDIT:
    	    return state.merge({
    	    	edited: true,
    	    })
    	case constants.CLICK_BACK:
    	    return state.merge({
    	    	edited: false,
    	    })
        case constants.INIT_TAGGROUP:
            return state.merge({
                tags: fromJS(action.data)
            })
    	default:
    	    return state;
    }
}