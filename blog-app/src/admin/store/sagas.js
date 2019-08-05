import { takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import * as actionCreators from './actionCreator';
import { message } from 'antd';
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
        const res =  yield axios.get('/test/titlelist');
        const action = actionCreators.initTitlelist(res.data);
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
        const res  = yield axios.get('/tag/test/taglist');
        const taglist = res.data.map((item)=>(item.tag));
        const action = actionCreators.initTagsGroupAction(taglist);
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
            message.success('发表成功');
            const delaction = actionCreators.deleteBlogById(action.id); //把原来的文章删除
            yield put(delaction);
        }
        else{
            message.error('发表失败');
        }
    }catch(e){
         console.log('接口请求失败，错误信息：', e.message);
    }
}

function* postBlogSaga(){
    yield takeEvery(constants.POST_BLOG,axiosPostBlog);
}

function* axiosloadDefaultBlog(action){
    try{
        const res = yield axios.get('/test/blogsingle',{params:{id: action.id}});
        const newaction = actionCreators.initDefaultBlog(res.data[0]);
        const fileList = [{uid:1, url:res.data[0].imgurl}];
        const newaction2 = actionCreators.initFileList(fileList);
        yield put(newaction2);
        yield put(newaction);
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* loadDefaultBlogSaga(){
    yield takeEvery(constants.LOAD_DEFAULT_BLOG,axiosloadDefaultBlog)
}

function* axiosDeleteBlog(action){
    try{
        const res = yield axios.get('/test/deleteBlog',{params:{id: action.id}});
        console.log(res.data);
        if(res.data==="success"){
             message.success('删除成功');
             const newaction = actionCreators.deleteBlogInList(action.id); //将博客从标题列表中删除
             yield put(newaction);
        }else{
            message.success('删除失败');
        }

    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* deleteBlogSaga(){
    yield takeEvery(constants.DELETE_BLOG_BY_ID, axiosDeleteBlog);
}

function* axiosAddInputTag(action){
    try{
        const res = yield axios.post('/tag/test/addtag',{inputValue: action.inputValue});
        if(res.data === "success"){
            message.success('添加成功');
            const newaction = actionCreators.hideTagInput(action.inputValue);
            yield put(newaction);
        }else{
            message.error('添加失败');
        }
    }catch(e){
        console.log('接口请求失败，错误信息：', e.message);
    }
}

function* addInputTagSaga(){
    yield takeEvery(constants.ADD_INPUT_TAG, axiosAddInputTag);
}

function* adminSaga(){
   yield fork(changeLoginSaga);
   yield fork(initTitlelistSaga);
   yield fork(initTagGroupSaga);
   yield fork(postBlogSaga);
   yield fork(loadDefaultBlogSaga);
   yield fork(deleteBlogSaga);
   yield fork(addInputTagSaga);
}

export default adminSaga;

