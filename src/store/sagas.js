import { blogdetailSaga } from '../pages/blogdetail/store';
import { homeSaga } from '../pages/home/store';
import { photosSaga } from '../pages/photos/store';
import { headerSaga } from '../common/header/store';
import { adminSaga } from '../admin/store';
import { fork } from 'redux-saga/effects';

function* mySaga() {
  yield fork(blogdetailSaga);
  yield fork(homeSaga);
  yield fork(photosSaga);
  yield fork(headerSaga);
  yield fork(adminSaga);
}

export default mySaga;