import * as constants from './constants'

export const clickIcon = () => ({
	type: constants.CLICK_ICON,
})

export const loadTagsAction = ()  =>({
	type: constants.LOAD_TAGS,
})

export const initTagsAction = (data) =>({
	type: constants.INIT_TAGS,
	data,
})