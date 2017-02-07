

export const post = (state={}, action) => {
    switch(action.type) {

        case "POST_RECEIVED":
            return  Object.assign({}, action.payload);

        case "LIKE_ADDED":
            return Object.assign({}, action.payload);

        default:
            return state;
    }
}
