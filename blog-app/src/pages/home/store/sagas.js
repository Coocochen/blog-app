import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { getBlogListAction } from './actionCreator';
import { LOAD_BLOGLIST } from './constants';

function* axiosBlogList() {
    try {
        // 正常返回之后，数据直接给res
	    const res = yield axios.get('/test/showbloglist.json');
	    const action = getBlogListAction(res.data.bloglist);
    yield put(action); // 相当于store.dispatch
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }

}
function* homeSaga() {
    // 只要接收到GET_INIT_LIST类型的action，就执行getInitList方法
    yield takeEvery(LOAD_BLOGLIST, axiosBlogList);
}

export default homeSaga;