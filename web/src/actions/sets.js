export const setSets = (sets) => ({
    type: "SET_SETS",
    payload: sets
});

export const addSet = () => ({
    type: "ADD_SET",
    name: prompt("Введите название новой колоды!", "Новая колода")
});

export const removeSet = (set) => ({
    type: "REMOVE_SET",
    payload: set
});