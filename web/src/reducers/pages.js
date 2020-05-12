const initialState = {
    currentPage: "startPage",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}