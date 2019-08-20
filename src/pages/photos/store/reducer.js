import { fromJS } from 'immutable';
import {
    INIT_PHOTOS,
} from './constants';

const defaultState = fromJS({
    picturelist: [],
});

export default (state = defaultState, action) =>{
    switch(action.type){
        case INIT_PHOTOS:
            return state.merge({
                picturelist: fromJS(action.data),
            })
        default:
            return state;
    }
}