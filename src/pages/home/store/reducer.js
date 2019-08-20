import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({ 
    bloglist:[],
    page: 1,
    hasBlog: true,
    loadMoreEvent: true
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
            loadMoreEvent: true
        })
    case constants.NO_BLOG_LEFT:
        return state.merge({
            hasBlog: false,
        })
    case constants.SET_ACTION_ACTION:
        return state.merge({
            action: fromJS(action.raction),
        })
    case constants.BANDON_LOAD_MORE:
        return state.merge({
            loadMoreEvent: false
        })
    default:
      return state;
   }
}