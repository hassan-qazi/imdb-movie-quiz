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