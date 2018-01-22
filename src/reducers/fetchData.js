/* Could put everyting in one reducer... */

export function movieReqHasErrored(state = false, action) {
    switch (action.type) {
        case 'MOVIE_REQ_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

export function movieReqRunning(state = false, action) {
    switch (action.type) {
        case 'MOVIE_REQ_RUNNING':
            return action.reqRunning;

        default:
            return state;
    }
}

export function movieImgReqHasErrored(state = false, action) {
    switch (action.type) {
        case 'MOVIE_IMG_REQ_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

export function movieImgReqRunning(state = false, action) {
    switch (action.type) {
        case 'MOVIE_IMG_REQ_RUNNING':
            return action.reqRunning;

        default:
            return state;
    }
}


/*
export function moviesFetchedData(state = [], action) {
    switch (action.type) {
        case 'MOVIE_FETCH_DATA_SUCCESS':
            return action.movies;

        default:
            return state;
    }
}
*/