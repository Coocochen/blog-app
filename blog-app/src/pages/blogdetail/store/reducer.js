import { fromJS } from 'immutable';
import { 
	INIT_COMMENT,
	LOAD_MORE_COMMENT,
	INIT_BLOGSINGLE
 } from './constants';

const defaultState = fromJS({
	commentlist: [],
	commentPage: 1,
	blogsingle: {},
});

export default (state = defaultState, action) =>{
	switch(action.type){
		case INIT_COMMENT:
		    return state.merge({
		    	commentlist: fromJS(action.data),
		    })
		case LOAD_MORE_COMMENT:
		    return state.merge({
		    	commentlist:fromJS(state.get('commentlist').concat(action.data)),
		    	commentPage: action.nextpage,
		    })
		case INIT_BLOGSINGLE:
		    return state.merge({
		    	blogsingle: fromJS(action.data),
		    })
		default:
            return state;
	}
}