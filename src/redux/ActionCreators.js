import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites'
import { PARTNERS } from '../shared/partners'

export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());
    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchPartners = () => dispatch => {
    dispatch(partnersLoading());
    setTimeout(() => {
        dispatch(addPartners(PARTNERS));
    }, 2000);
}

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS
})

export const partnersFailed = errMess => ({
    type: ActionType.PARTNERS_FAILED,
    payload: errMess
})

// export const ADD_PARTNERS = 'ADD_PARTNERS'
// export const PARTNERS_LOADING = 'PARTNERS_LOADING'
// export const PARTNERS_FAILED = 'PARTNERS_FAILED'