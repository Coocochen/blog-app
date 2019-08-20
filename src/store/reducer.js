import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as bloglistReducer } from '../pages/home/store';
import { reducer as blogdetailReducer } from '../pages/blogdetail/store';
import { reducer as photosReducer } from '../pages/photos/store';
import { reducer as adminReducer } from '../admin/store';

export default combineReducers({
	header: headerReducer,
	blog: bloglistReducer,
	blogdetail: blogdetailReducer,
	photos: photosReducer,
	admin: adminReducer,
})