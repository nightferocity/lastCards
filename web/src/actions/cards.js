export const setCards = (cards) => ({
    type: "SET_CARDS",
    payload: cards
});

export const addCard = (desk) => ({
    type: "ADD_CARD",
    payload: desk
});

export const removeCard = (card) => ({
    type: "REMOVE_CARD",
    payload: card
});
