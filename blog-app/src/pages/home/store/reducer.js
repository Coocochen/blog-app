import { fromJS } from 'immutable';
import { INIT_BLOG_LIST } from './constants';
const defaultState = fromJS({ 
	bloglist:[],
});

export default (state = defaultState,action)=>{
   switch(action.type){
   	case INIT_BLOG_LIST:
   	  return state.merge({
   	  	bloglist: fromJS(action.bloglist),
   	  });
    default:
      return state;
   }
}