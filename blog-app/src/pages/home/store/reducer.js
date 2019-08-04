import { fromJS } from 'immutable';
import { 
	INIT_BLOG_LIST,
	LOAD_MORE_BLOG,
	NO_BLOG_LEFT
} from './constants';
const defaultState = fromJS({ 
	bloglist:[],
	page: 1,
	hasBlog: true,
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
	case NO_BLOG_LEFT:
	    return state.merge({
	    	hasBlog: false,
	    })
    default:
      return state;
   }
}