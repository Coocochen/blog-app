import { fromJS } from 'immutable';
import { 
	GET_COMMENTLIST,
	INIT_COMMENT,
	GET_MORE_COMMENT,
	LOAD_MORE_COMMENT,
	LOAD_BLOGSINGLE,
	INIT_BLOGSINGLE,
} from './constants';

export const getCommentAction = () =>({
    type: GET_COMMENTLIST,
})

export const initComment = (data)=>({
    type: INIT_COMMENT,
    data,
})

export const loadMoreComment = (data,nextpage) =>({
	type: LOAD_MORE_COMMENT,
	data:fromJS(data),
	nextpage,
})

export const getMoreCommentAction = (page) =>({
    type: GET_MORE_COMMENT,
    page,
})

export const loadBlogSingle = (id) =>({
    type: LOAD_BLOGSINGLE,
    id,
})

export const initBlogSingle = (data) => ({
	type: INIT_BLOGSINGLE,
	data,
})