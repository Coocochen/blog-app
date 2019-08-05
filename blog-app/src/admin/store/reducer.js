import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false,
    posting: false,  //发布
	titlelist: [],
    tags: [],
    blog: {},
    fileList: [], //图片
    inputVisible: false,  //tag的输入框
    inputValue: '',

})

export default (state=defaultState,action) =>{
    let newBlog;
    switch(action.type){
    	case constants.CHANGE_LOGIN:
    	    return state.merge({
    	    	login: fromJS(action.login),
    	    })
    	case constants.INIT_TITLELIST:
    	    return state.merge({
    	    	titlelist: fromJS(action.data),
    	    })
        case constants.INIT_TAGGROUP:
            return state.merge({
                tags: fromJS(action.data)
            })
        case constants.CHANGE_TO_POSTING:
            return state.merge({
                posting: true
            })
        case constants.CHANGE_TO_UNPOSTING:
            return state.merge({
                posting: false
            })
        case constants.INIT_DEFAULT_BLOG:
            return state.merge({
                blog: fromJS(action.data)
            })
        case constants.CHANGE_BLOG_TITLE:
            newBlog = JSON.parse(JSON.stringify(state.get('blog')));
            newBlog.title = action.title;
            return state.merge({
                blog: fromJS(newBlog),
            })
        case constants.CHANGE_BLOG_TAG:
            newBlog = JSON.parse(JSON.stringify(state.get('blog')));
            newBlog.tag = action.tag;
            return state.merge({
                blog: fromJS(newBlog),
            })
        case constants.CHANGE_BLOG_CONTENT:
            newBlog = JSON.parse(JSON.stringify(state.get('blog')));
            newBlog.content = action.content;
            return state.merge({
                blog: fromJS(newBlog),
            });
        case constants.INIT_FILELIST:
            return state.merge({
                fileList: fromJS(action.fileList),
            })
        case constants.REMOVE_BLOG_PICTURE:
            const newFileList = state.get('fileList').toJS().slice();
            newFileList.splice(action.index,  1);
            return state.merge({
                fileList: fromJS(newFileList),
            })
        case constants.ADD_BLOG_PICTURE:
            return state.merge({
                fileList: fromJS([...state.get('fileList').toJS(), action.file]),
            })
        case constants.CHANGE_INPUT_VALUE:
            return state.merge({
                inputValue: fromJS(action.value),
            })
        case constants.SHOW_INPUT:
            return state.merge({
                inputVisible: true,
            })
        case constants.HIDE_TAG_INPUT:
            return state.merge({
                inputVisible: false,
                inputValue: '',
                tags: [...state.get('tags').toJS(),action.inputValue],
            })
        case constants.DELETE_BLOG_IN_LIST:
            const newTitlelist = [...state.get('titlelist').toJS()].filter((item)=>(item.Id !== action.id));
            return state.merge({
                titlelist: fromJS(newTitlelist),
            })
    	default:
    	    return state;
    }
}