const initialState = {
    isReady: false,  //готовность к отображению
    items: null,
};

function findFreeId(arr) {
    let id;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].id - i > 1)
            return i + 1;
    }
    return arr.length + 1;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SETS": //первоночальная загрузка карт
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case "ADD_SET":{
            let newState = JSON.parse(JSON.stringify(state));
            let nextID = findFreeId(newState.items);
            newState.items.splice(nextID - 1, 0,{
                id: nextID,
                name: action.name
            });
            return newState;
        }
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload
            };
        case "REMOVE_SET": {
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.descId)
            };
        }
        default:
            return state;
    }
}