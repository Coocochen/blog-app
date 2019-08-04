import { takeEvery, put, fork} from 'redux-saga/effects';
import axios from 'axios';
import { 
    getBlogListAction,
    loadMoreBlog,
 } from './actionCreator';
import { 
    LOAD_BLOGLIST,
    GET_MORE_BLOG
} from './constants';

function* axiosBlogList() {
    try {
        // 正常返回之后，数据直接给res
	    const res = yield axios.get('/test/showbloglist',{params:{page: 0}});
	    const action = getBlogListAction(res.data);
    yield put(action); // 相当于store.dispatch
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }

}

function* loadbloglistSaga() {
    yield takeEvery(LOAD_BLOGLIST, axiosBlogList);
}

function* axiosLoadMoreBlog(action){
    try {   
        const res = yield axios.get('/test/showbloglist',{params:{page: action.page}});
        const newaction = loadMoreBlog(res.data,action.page+1);     
        yield put(newaction); 
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* loadMoreBlogSaga(){
    yield takeEvery(GET_MORE_BLOG, axiosLoadMoreBlog);
}

function* homeSaga() {
    yield fork(loadMoreBlogSaga);
    yield fork(loadbloglistSaga);
}

export default homeSaga;