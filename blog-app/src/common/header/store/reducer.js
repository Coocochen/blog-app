import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({ //把state转化为不可变对象
	opened: false,
	taglist: [],
	intro: "从明天起，做一个幸福的人。喂马，劈柴，周游世界。   --海子"
});

export default (state = defaultState,action)=>{
   if(action.type === constants.CLICK_ICON ){
   	  return state.set('opened', !state.get('opened'))
   }
   switch(action.type){
   	    case constants.CLICK_ICON:
            return state.set('opened', !state.get('opened'));
        case constants.INIT_TAGS:
            return state.set('taglist', fromJS(action.data));
        default:
            return state;
   }
}