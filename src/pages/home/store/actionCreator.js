import * as constants from './constants';
import { fromJS } from 'immutable';
export const loadBloglist = (id)=>({
    type: constants.LOAD_BLOGLIST,
    id
})

export const getBlogListAction = (data)=>({
    type: constants.INIT_BLOG_LIST,
    bloglist: data,
})

export const getMoreBlogAction = (page,id) =>({
    type: constants.GET_MORE_BLOG,
    page,
    id
})

export const loadMoreBlog = (data,nextpage) =>({
    type: constants.LOAD_MORE_BLOG,
    data:fromJS(data),
    nextpage,
})

export const changeHasBlogToFalse = ()=>({
    type: constants.NO_BLOG_LEFT,
})

export const setActionaction = (raction) => ({
    type: constants.SET_ACTION_ACTION,
    raction,
})

export const bandonLoadMore = () => ({
    type: constants.BANDON_LOAD_MORE
})