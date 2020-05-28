const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CARD_TO_CHOSEN":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: action.payload.id,
                        setId: "game",
                        front: action.payload.front,
                        back: action.payload.back
                    }
                ],
            };
        case "REMOVE_CARD_FROM_CHOSEN":
            return  {
                ...state,
                items: state.items.filter(o => o.id !== action.payload.id)
            };
        default:
            return state;
    }
}