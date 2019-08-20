import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	commentlist: [],
	commentPage: 1,
	blogsingle: {},
	hasComment: true,
	posting: false,  //评论发表
	inputName: "",
	inputMail: "",
	inputComment: "",
	loadMoreEvent: true
});


export default (state = defaultState, action) =>{
	switch(action.type){
		case constants.INIT_COMMENT:
		    return state.merge({
		    	commentlist: fromJS(action.data),
		    })
		case constants.LOAD_MORE_COMMENT:
		    return state.merge({
		    	commentlist:fromJS(state.get('commentlist').concat(action.data)),
		    	commentPage: action.nextpage,
		    	loadMoreEvent: true
		    })
		case constants.INIT_BLOGSINGLE:
		    return state.merge({
		    	blogsingle: fromJS(action.data),
		    })
		case constants.UPDATE_COMMENT:
			if(!state.get('hasComment')){
				return state.merge({
					commentlist: state.get('commentlist').unshift(fromJS(action.comment)),
					inputName: "",
					inputMail: "",
					inputComment: "",
					posting: false
			})
			}else{
				return state.merge({
					commentlist: state.get('commentlist').unshift(fromJS(action.comment)).pop(),
					inputName: "",
					inputMail: "",
					inputComment: "",
					posting: false
				})
			}
	    case constants.NO_COMMENT_LEFT:
		    return state.merge({
		    	hasComment: false,
		    })
		case constants.CHANGE_TO_POSTING:
		    return state.merge({
		    	posting: true,
		    })
		case constants.CHANGE_INPUT_NAME:
		    return state.merge({
		    	inputName: fromJS(action.inputName),
		    })
		case constants.CHANGE_INPUT_MAIL:
		    return state.merge({
		    	inputMail: fromJS(action.inputMail),
		    })
		case constants.CHANGE_INPUT_COMMENT:
		    return state.merge({
		    	inputComment: fromJS(action.inputComment),
		    })
		case constants.BANDON_LOAD_MORE:
		    return state.merge({
		    	loadMoreEvent: false
		    })
		default:
            return state;
	}
}