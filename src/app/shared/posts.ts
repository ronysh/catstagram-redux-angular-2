const posts = (state=[], action) => {
    switch(action.type) {
        case "LOAD_POSTS":
            return [...state,
                    ...action.payload];

        case "ADD_LIKE":
            return [...state,
                    action.payload
                ];
        case "REMOVE_LIKE";
            return [...state,
                    action.payload
                ];
        default:
            return state;
    }
}
