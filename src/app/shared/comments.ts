export const comments = (state=[], action) => {
    switch(action.type){
            case "COMMENTS_RECEIVED":
                return [
                    ...action.payload
                ];
            case "COMMENT_ADDED":
                return [
                    ...state,
                    action.payload
                ];
        default:
            return state;
    }
}
