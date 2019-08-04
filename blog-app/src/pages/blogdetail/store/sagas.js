import { takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import { 
    initComment,
    loadMoreComment,
    initBlogSingle
 } from './actionCreator';
import { 
    GET_COMMENTLIST,
    GET_MORE_COMMENT,
    LOAD_BLOGSINGLE,
} from './constants';

function* axiosCommentList() {
    try {
        // 正常返回之后，数据直接给res     
        const res = yield axios.get('/test/showCommentList.json');
        const action = initComment(res.data.commentlist);     
    yield put(action); // 相当于store.dispatch
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* axiosLoadMoreComment(action){
    try {   
        const res = yield axios.get('/test/showCommentList.json?page='+action.page);
        const newaction = loadMoreComment(res.data.commentlist,action.page+1);     
        yield put(newaction); 
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* axiosLoadBlogSingle(action){
    try{
        const res = yield axios.get('/test/blogsingle',{params:{id:action.id}});
        const newaction = initBlogSingle(res.data[0]);
        console.log(res.data);
        yield put(newaction);
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* initCommentSaga() {
    yield takeEvery(GET_COMMENTLIST, axiosCommentList);
}

function* loadMoreCommentSaga(){
    yield takeEvery(GET_MORE_COMMENT, axiosLoadMoreComment);
}

function* loadBlogSingleSaga(){
    yield takeEvery(LOAD_BLOGSINGLE, axiosLoadBlogSingle);
}

function* blogdetailSaga(){
    yield fork(initCommentSaga);  //非阻塞执行
    yield fork(loadMoreCommentSaga);
    yield fork(loadBlogSingleSaga);
}

export default blogdetailSaga;