const initialState = {
    isReady: false,  //готовность к отображению
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARDS": //первоночальная загрузка карт
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case "ADD_CARD":
            return  {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload
            };
        case "REMOVE_CARD":
            return  {
                ...state,
                items: state.items.filter(o => o.id !== action.payload.id)
            };
        case "CHANGE_CARD": {
            const newState = JSON.parse(JSON.stringify(state));
            let cardIndex = newState.items.findIndex(card => card.id === action.payload.id);
            newState.items[cardIndex] = {
                "id": state.items[cardIndex].id,
                "setId": state.items[cardIndex].setId,
                "front":  action.front,
                "back": action.back
            };
            return newState
        }
        default:
            return state;
    }
}