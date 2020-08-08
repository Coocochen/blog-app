import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  bloglist: [],
  page: 1,
  hasBlog: true,
  loadMoreEvent: true,
  ismouseover: false,
  searchContent: '',
  isInputFocus: false,
  tips: [],
  isClickItem: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_BLOG_LIST:
      return state.merge({
        bloglist: fromJS(action.bloglist),
      });
    case constants.LOAD_MORE_BLOG:
      return state.merge({
        bloglist: fromJS(state.get('bloglist').concat(action.data)),
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
    case constants.MOUSE_OVER_SEARCH:
      return state.merge({
        ismouseover: true
      })
    case constants.MOUSE_LEAVE_SEARCH:
      return state.merge({
        ismouseover: false,
        isInputFocus: false
      })
    case constants.SEARCH_CONTENT_CHANGE:
      return state.merge({
        searchContent: fromJS(action.data)
      })
    case constants.INPUT_FOCUS:
      return state.merge({
        isInputFocus: true
      })
    case constants.HIDE_ITEM:
      return state.merge({
        isInputFocus: false,
        searchContent: fromJS(action.value)
      })
    case constants.SET_TIPS:
      return state.merge({
        tips: action.data
      })
    case constants.CLICK_ITEM:
      return state.merge({
        isClickItem: true
      })
    case constants.CLICK_ITEM_TO_FALSE:
      return state.merge({
        isClickItem: false
      })
    default:
      return state;
  }
}