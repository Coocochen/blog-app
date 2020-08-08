import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({ //把state转化为不可变对象
  opened: false,
  taglist: [],
  intro: "世上的事，只要肯用心去学，没有一件是太晚的。 ——三毛 《送你一匹马》"
});

export default (state = defaultState, action) => {
  if (action.type === constants.CLICK_ICON) {
    return state.set('opened', !state.get('opened'))
  }
  switch (action.type) {
    case constants.CLICK_ICON:
      return state.set('opened', !state.get('opened'));
    case constants.INIT_TAGS:
      return state.set('taglist', fromJS(action.data));
    default:
      return state;
  }
}