import { takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_TAGS,
} from './constants';
import {
	initTagsAction,
} from './actionCreator';

function* axiosLoadTags(){
    try{
        const res  = yield axios.get('/tag/test/taglist');
        const action = initTagsAction(res.data);
        yield put(action);
    }catch(e){
         console.log('接口请求失败，错误信息：', e.message);
    }
}

function* headerSaga(){
    yield takeEvery(LOAD_TAGS, axiosLoadTags)
}

export default headerSaga;