import { 
	LOAD_BLOGLIST, 
	INIT_BLOG_LIST,
	GET_MORE_BLOG,
	LOAD_MORE_BLOG,
	NO_BLOG_LEFT
} from './constants';
import { fromJS } from 'immutable';
export const loadBloglist = (id)=>({
    type: LOAD_BLOGLIST,
    id
})

export const getBlogListAction = (data)=>({
	type: INIT_BLOG_LIST,
	bloglist: data,
})

export const getMoreBlogAction = (page,id) =>({
    type: GET_MORE_BLOG,
    page,
    id
})

export const loadMoreBlog = (data,nextpage) =>({
	type: LOAD_MORE_BLOG,
	data:fromJS(data),
	nextpage,
})

export const changeHasBlogToFalse = ()=>({
	type: NO_BLOG_LEFT,
})