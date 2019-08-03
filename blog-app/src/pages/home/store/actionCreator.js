import { LOAD_BLOGLIST, INIT_BLOG_LIST } from './constants';

export const loadBloglist = ()=>(
       {
       	   type: LOAD_BLOGLIST,
       }
	)

export const getBlogListAction = (data)=>(
       {
       	   type: INIT_BLOG_LIST,
       	   bloglist: data,
       }
	)