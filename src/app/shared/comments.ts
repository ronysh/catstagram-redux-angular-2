export const comments = (state=[], action) => {
    switch(action.type){
            case "LOAD_COMMENTS":
                return [
                    ...action.payload
                ];
            case "ADD_COMMENT":
                return [
                    ...state,
                    action.payload
                ];
        default:
            return state;
    }
}
