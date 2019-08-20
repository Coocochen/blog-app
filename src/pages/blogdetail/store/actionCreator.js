import { fromJS } from 'immutable';
import * as constants from './constants';

export const getCommentAction = (blogid) =>({
    type: constants.GET_COMMENTLIST,
    blogid
})

export const initComment = (data)=>({
    type: constants.INIT_COMMENT,
    data,
})

export const loadMoreComment = (data,nextpage) =>({
	type: constants.LOAD_MORE_COMMENT,
	data:fromJS(data),
	nextpage,
})

export const getMoreCommentAction = (page,blogid) =>({
    type: constants.GET_MORE_COMMENT,
    page,
    blogid
})

export const bandonLoadMore = () => ({
	type: constants.BANDON_LOAD_MORE
})

export const loadBlogSingle = (id) =>({
    type: constants.LOAD_BLOGSINGLE,
    id,
})

export const initBlogSingle = (data) => ({
	type: constants.INIT_BLOGSINGLE,
	data,
})

export const submitCommentAction = (name,mail,comment,blogid) =>({
	type: constants.SUBMIT_COMMENT,
	name,
	mail,
	comment,
	blogid,
})

export const updateComment = (comment) =>({
	type: constants.UPDATE_COMMENT,
	comment
})

export const changeHasCommentToFalse = ()=>({
	type: constants.NO_COMMENT_LEFT,
})

export const changeToPosting = () =>({
	type:constants.CHANGE_TO_POSTING,
})

export const changeInputNameAction = (inputName)=>({
	type: constants.CHANGE_INPUT_NAME,
	inputName,
})

export const changeInputMailAction = (inputMail) => ({
	type: constants.CHANGE_INPUT_MAIL,
	inputMail
})

export const changeInputCommentAction = (inputComment) =>({
    type: constants.CHANGE_INPUT_COMMENT,
    inputComment,
})

