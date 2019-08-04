import { 
	LOAD_BLOGLIST, 
	INIT_BLOG_LIST,
	GET_MORE_BLOG,
	LOAD_MORE_BLOG
} from './constants';
import { fromJS } from 'immutable';
export const loadBloglist = ()=>({
    type: LOAD_BLOGLIST,
})

export const getBlogListAction = (data)=>({
	type: INIT_BLOG_LIST,
	bloglist: data,
})

export const getMoreBlogAction = (page) =>({
    type: GET_MORE_BLOG,
    page,
})

export const loadMoreBlog = (data,nextpage) =>({
	type: LOAD_MORE_BLOG,
	data:fromJS(data),
	nextpage,
})
