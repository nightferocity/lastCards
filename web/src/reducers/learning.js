const initialState = {
    isFrontSide: true,
    item: null,
    numberCard: 1,
    isLastCard: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD_SIDE":
            return {
                ...state,
                isFrontSide: action.payload,
                item: action.cards,
                numberCard: 0
            };
        case "TAKE_NEXT_CARD":
            return {
                ...state,
                numberCard: state.numberCard + 1,
                isLastCard: state.numberCard === state.item.length - 2
            };
        default:
            return state;
    }
}