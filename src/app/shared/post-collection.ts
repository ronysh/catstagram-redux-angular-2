export const posts = (state=[], action) => {
    switch(action.type) {
        case "POSTS_RECEIVED":
            return [...action.payload];

        case "LIKE_ADDED":
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
