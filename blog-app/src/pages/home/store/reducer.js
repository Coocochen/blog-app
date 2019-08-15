import { fromJS } from 'immutable';
import * as constants from './constants';
import { STATS } from "react-pullload";

const defaultState = fromJS({ 
	bloglist:[],
	page: 1,
	hasBlog: true,
	action: STATS.init,
});

export default (state = defaultState,action)=>{
   switch(action.type){
   	case constants.INIT_BLOG_LIST:
   	  return state.merge({
   	  		bloglist: fromJS(action.bloglist),
   	  });
	case constants.LOAD_MORE_BLOG:
		return state.merge({
			bloglist:fromJS(state.get('bloglist').concat(action.data)),
			page: fromJS(action.nextpage),
		})
	case constants.NO_BLOG_LEFT:
	    return state.merge({
	    	hasBlog: false,
	    })
	case constants.SET_ACTION_ACTION:
	    return state.merge({
	    	action: fromJS(action.raction),
	    })
	case constants.SET_ACTION_REFRESHING:
	    return state.merge({
	    	action: STATS.refreshing
	    })
	case constants.SET_ACTION_REFRESHED:
	    return state.merge({
	    	action:STATS.refreshed
	    })
    default:
      return state;
   }
}