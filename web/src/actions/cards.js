export const setCards = (cards) => ({
    type: "SET_CARDS",
    payload: cards
});

export const addCard = (card) => ({
    type: "ADD_CARD",
    payload: card
});

export const removeCard = (card) => ({
    type: "REMOVE_CARD",
    payload: card
});