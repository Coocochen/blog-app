import { takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import * as actionCreators from './actionCreator';
function* axiosChangeLogin(action){
    try{
        const res =  yield axios.get('/test/login.json',{admin:action.admin,password:action.password});
        console.log(res.data);
        const newaction = actionCreators.changeLogin(res.data.login);
        yield put(newaction);
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* changeLoginSaga(){
    yield takeEvery(constants.CLICK_SUBMIT,axiosChangeLogin);
}

function* axiosInitTitlelist(){
    try{
        const res =  yield axios.get('/test/titlelist.json');
        const action = actionCreators.initTitlelist(res.data.titlelist);
        yield put(action);
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* initTitlelistSaga(){
    yield takeEvery(constants.LOAD_TITLELIST,axiosInitTitlelist)
}

function* axiosInitTagGroup(){
    try{
        const res  = yield axios.get('/test/taglist.json');
        const action = actionCreators.initTagsGroupAction(res.data.taglist);
        yield put(action);
    }catch(e){
         console.log('接口请求失败，错误信息：', e.message);
    }
}

function* initTagGroupSaga(){
    yield takeEvery(constants.LOAD_TAGGROUP,axiosInitTagGroup);
}

function* axiosPostBlog(action){
     try{
        const res  = yield axios.post('/test/postBlog',
                                       action.formdata,
                                       {headers:{
                                           "Content-Type": "multipart/form-data" 
                                        }});
        const newaction = actionCreators.changeToUnPosting();
        yield put(newaction);
        if(res.data==="success"){
           alert("发表成功");
        }
        else{
            alert("发表失败");
        }
    }catch(e){
         console.log('接口请求失败，错误信息：', e.message);
    }
}

function* postBlogSaga(){
    yield takeEvery(constants.POST_BLOG,axiosPostBlog);
}

function* adminSaga(){
   yield fork(changeLoginSaga);
   yield fork(initTitlelistSaga);
   yield fork(initTagGroupSaga);
   yield fork(postBlogSaga);
}

export default adminSaga;

