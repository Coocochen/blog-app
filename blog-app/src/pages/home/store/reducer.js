import { fromJS } from 'immutable';
import { 
	INIT_BLOG_LIST,
	LOAD_MORE_BLOG
} from './constants';
const defaultState = fromJS({ 
	bloglist:[],
	page: 1,
});

export default (state = defaultState,action)=>{
   switch(action.type){
   	case INIT_BLOG_LIST:
   	  return state.merge({
   	  		bloglist: fromJS(action.bloglist),
   	  });
	case LOAD_MORE_BLOG:
		return state.merge({
			bloglist:fromJS(state.get('bloglist').concat(action.data)),
			page: fromJS(action.nextpage),
		})
    default:
      return state;
   }
}