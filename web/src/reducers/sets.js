const initialState = {
    isReady: false,  //готовность к отображению
    items: null,
};

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
            let middleID = newState.items.reduce((prev, curr) => curr.id - prev.id === 1? curr: prev).id;
            let nextID = middleID === newState.items[newState.items.length - 1].id? middleID+1: middleID;
            newState.items.push({
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
        case "REMOVE_SET":
            return  {
                ...state,
                items: state.items.filter(o => o.id !== action.payload.id)
            };
        default:
            return state;
    }
}