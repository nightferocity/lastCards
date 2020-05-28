const initialState = {
    isReady: false,  //готовность к отображению
    items: null,
};

function findFreeId(arr) {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].id - i > 1)
            return i + 1;
    }
    return arr.length + 1;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARDS": //первоночальная загрузка карт
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case "ADD_CARD":{
            let newState = JSON.parse(JSON.stringify(state));
            let nextID = findFreeId(newState.items);
            newState.items.splice(nextID-1,0,{
                front: "Не изменялось",
                back:"No change",
                id: nextID,
                setId: action.deskID
            });
            return newState;
        }
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
        case "REMOVE_DESC_CARDS":
            return {
                ...state,
                items: state.items.filter(card => card.setId !== action.descID)
            };
        default:
            return state;
    }
}