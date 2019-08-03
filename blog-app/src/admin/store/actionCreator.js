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

export const clickEditAction = (id) =>({
	type: constants.CLICK_EDIT,
	id
})

export const clickBackAction = () =>({
	type: constants.CLICK_BACK,
})

export const loadTagGroupAction = ()=>({
	type: constants.LOAD_TAGGROUP,
})

export const initTagsGroupAction = (data)=>({
    type: constants.INIT_TAGGROUP,
    data
})