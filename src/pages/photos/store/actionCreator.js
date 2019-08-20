import {
    LOAD_PHOTOS,
    INIT_PHOTOS
} from './constants';

export const loadPhotosAction = ()=>({
    type: LOAD_PHOTOS,
})

export const initPhotos = (data) =>({
    type: INIT_PHOTOS,
    data,
})
