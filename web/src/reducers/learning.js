const initialState = {
    isFrontSide: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD_SIDE":
            return {
                ...state,
                isFrontSide: action.payload,
            };
        default:
            return state;
    }
}