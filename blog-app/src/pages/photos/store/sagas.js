import { takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_PHOTOS,
} from './constants';
import {
	initPhotos,
} from './actionCreator';

function* axiosLoadPhotos(){
	try{
        const res = yield axios.get('/photos/test/photolist');
		const action = initPhotos(res.data);
		yield put(action);
	}catch(e){
        console.log('接口请求失败，错误信息：', e.message);
	}
}

function* photosSaga(){
   yield takeEvery(LOAD_PHOTOS, axiosLoadPhotos);
}

export default photosSaga;