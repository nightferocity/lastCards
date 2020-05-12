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
        default:
            return state;
    }
}