

export const post = (state={}, action) => {
    switch(action.type) {

        case "LOAD_POST":
            return  Object.assign({}, action.payload);

        case "ADD_LIKE":
            return Object.assign({}, action.payload, {
                likes: action.payload.likes + 1
            });

        default:
            return state;
    }
}
