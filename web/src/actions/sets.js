export const setSets = (sets) => ({
    type: "SET_SETS",
    payload: sets
});

export const addSet = (set) => ({
    type: "ADD_SET",
    payload: set
});

export const removeSet = (set) => ({
    type: "REMOVE_SET",
    payload: set
});