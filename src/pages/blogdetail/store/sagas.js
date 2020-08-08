import { takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  initComment,
  loadMoreComment,
  initBlogSingle,
  updateComment,
  changeHasCommentToFalse,
  changeToPosting
} from './actionCreator';
import {
  GET_COMMENTLIST,
  GET_MORE_COMMENT,
  LOAD_BLOGSINGLE,
  SUBMIT_COMMENT
} from './constants';
import Prism from 'prismjs';
import { message } from 'antd';
function* axiosCommentList(action) {
  try {
    // 正常返回之后，数据直接给res     
    const res = yield axios.get('/test/comment/commentlist', { params: { blogid: action.blogid, page: 0 } });
    if (res.data.length < 3) {
      yield put(changeHasCommentToFalse());
    }
    const newaction = initComment(res.data);
    yield put(newaction); // 相当于store.dispatch
  } catch (e) {
    console.log('接口请求失败，错误信息：', e.message);
  }
}


function* axiosLoadMoreComment(action) {
  try {
    const res = yield axios.get('/test/comment/commentlist', { params: { page: action.page, blogid: action.blogid } });
    if (res.data.length < 3) {
      yield put(changeHasCommentToFalse());
    }
    const newaction = loadMoreComment(res.data, action.page + 1);
    yield put(newaction);
  } catch (e) {
    console.log('接口请求失败，错误信息：', e.message);
  }
}

function* axiosLoadBlogSingle(action) {
  try {
    const res = yield axios.get('/test/blogsingle', { params: { id: action.id } });
    const newaction = initBlogSingle(res.data[0]);
    yield put(newaction);
    Prism.highlightAll();
  } catch (e) {
    console.log('接口请求失败，错误信息：', e.message);
  }
}

function* axiosSubmitComment(action) {
  try {
    const reg = /^([a-zA-Z]|[0-9])(\w|\.)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (action.name.trim() === "") {
      message.error("请填写昵称");
    } else if (action.mail.trim() === "" || !reg.test(action.mail.trim())) {
      message.error("请正确填写邮箱");
    } else if (action.comment.trim() === "") {
      message.error("请填写评论");
    }
    else {
      const postAction = changeToPosting();
      yield put(postAction);
      const res = yield axios.post('/test/comment/addcomment', { name: action.name, mail: action.mail, comment: action.comment.replace(/'/g, '"'), blogid: action.blogid })
      if (res.data.status === "success") {
        message.success("评论成功");
        const updateAction = updateComment(res.data.comment);
        yield put(updateAction);
      } else {
        message.error("评论失败")
      }
    }
  } catch (e) {
    console.log('接口请求失败，错误信息：', e.message);
  }
}

function* initCommentSaga() {
  yield takeEvery(GET_COMMENTLIST, axiosCommentList);
}

function* loadMoreCommentSaga() {
  yield takeEvery(GET_MORE_COMMENT, axiosLoadMoreComment);
}

function* loadBlogSingleSaga() {
  yield takeEvery(LOAD_BLOGSINGLE, axiosLoadBlogSingle);
}

function* submitCommentSaga() {
  yield takeEvery(SUBMIT_COMMENT, axiosSubmitComment)
}

function* blogdetailSaga() {
  yield fork(initCommentSaga);  //非阻塞执行
  yield fork(loadMoreCommentSaga);
  yield fork(loadBlogSingleSaga);
  yield fork(submitCommentSaga);
}

export default blogdetailSaga;