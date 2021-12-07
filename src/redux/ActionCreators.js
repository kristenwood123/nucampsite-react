import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites'
import { PARTNERS } from '../shared/partners'
import { baseUrl } from '../shared/baseUrl';

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

export const addCampsites = campsites => {
    
    return (
    {type: ActionTypes.ADD_CAMPSITES,
    payload: campsites}
    )
};


export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

// Partners
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
    type: ActionTypes.ADD_PARTNERS,
    payload: partners

})

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess,
})


// Feedback
export const postFeedback = (feedback) => dispatch =>  {
    
    const newComment = {
        ...feedback
    };
    return fetch(baseUrl + 'feedback', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(console.log('Current State is: ' + JSON.stringify(newComment)))
        .then(alert('Thank you for your feedback! \r\n\r\n You Submitted: ' + JSON.stringify(newComment)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
}