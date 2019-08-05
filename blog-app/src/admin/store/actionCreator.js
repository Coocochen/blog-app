import * as constants from './constants';

export const clickSubmit = (admin,password) => ({
    type: constants.CLICK_SUBMIT,
    admin,
    password
})

export const changeLogin = (login) =>({
	type: constants.CHANGE_LOGIN,
	login,
})

export const loadTitleListAction = () => ({
	type: constants.LOAD_TITLELIST,
})

export const initTitlelist = (data) =>({
	type: constants.INIT_TITLELIST,
	data
})

export const loadTagGroupAction = ()=>({
	type: constants.LOAD_TAGGROUP,
})

export const initTagsGroupAction = (data)=>({
    type: constants.INIT_TAGGROUP,
    data
})

export const postBlogAction = (formdata,id) =>({
	type: constants.POST_BLOG,
	formdata,
	id,
})

export const changeToPosting = () =>({
	type:constants.CHANGE_TO_POSTING,
})

export const changeToUnPosting = () =>({
	type: constants.CHANGE_TO_UNPOSTING,
})

export const loadDefaulBlogAction = (id) => ({
	type: constants.LOAD_DEFAULT_BLOG,
	id,
})

export const initDefaultBlog = (data) => ({
	type: constants.INIT_DEFAULT_BLOG,
	data,
})

export const deleteBlogById = (id) =>({
	type: constants.DELETE_BLOG_BY_ID,
	id,
})

export const changeBlogTitle= (title) => ({
	type: constants.CHANGE_BLOG_TITLE,
	title
})

export const changeBlogTag = (tag) => ({
    type:constants.CHANGE_BLOG_TAG,
    tag
})

export const changeBlogEditor = (content) =>({
	type: constants.CHANGE_BLOG_CONTENT,
	content,
})

export const removeBlogPicture = (index) =>({
	type: constants.REMOVE_BLOG_PICTURE,
	index,
})

export const initFileList = (fileList) =>({
	type: constants.INIT_FILELIST,
	fileList,
})

export const addBlogPicture = (file) =>({
	type: constants.ADD_BLOG_PICTURE,
	file,
})

export const changeInputValueAction = (value) =>({
    type: constants.CHANGE_INPUT_VALUE,
    value,
})

export const showInputAction = () =>({
	type: constants.SHOW_INPUT,
})

export const addInputTagAction =(inputValue) => ({
	type: constants.ADD_INPUT_TAG,
	inputValue,
})

export const hideTagInput = (inputValue) =>({
	type: constants.HIDE_TAG_INPUT,
	inputValue,
})

export const deleteBlogInList = (id) =>({
	type: constants.DELETE_BLOG_IN_LIST,
	id,
})