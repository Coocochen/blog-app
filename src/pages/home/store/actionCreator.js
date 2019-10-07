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

export const mouseOverSearch = () =>({
    type: constants.MOUSE_OVER_SEARCH
})

export const mouseLeaveSearch = () =>({
    type: constants.MOUSE_LEAVE_SEARCH
})

export const searchContentChange = (value) => ({
    type: constants.SEARCH_CONTENT_CHANGE,
    data: value
})

export const searchResult = (content) => ({
    type: constants.SEARCH_RESULT,
    data: content
})

export const inputFocus = () => ({
    type: constants.INPUT_FOCUS
})

export const hideItem = (value) => ({
    type: constants.HIDE_ITEM,
    value: value
})

export const setTips = (data) =>({
    type: constants.SET_TIPS,
    data: data
})

export const clickItem = () =>({
    type: constants.CLICK_ITEM
})

export const clickItemTofalse = () =>({
    type: constants.CLICK_ITEM_TO_FALSE
})