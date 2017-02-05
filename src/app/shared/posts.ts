export const posts = (state=[], action) => {
    switch(action.type) {
        case "LOAD_POSTS":
            return [...state,
                    ...action.payload];

        case "ADD_LIKE":
            return state.map(post => {
                if(post.id === action.payload) {
                    return Object.assign({}, post, {
                        likes: post.likes + 1
                    });
                }
                return post;
            });
        default:
            return state;
    }
}
