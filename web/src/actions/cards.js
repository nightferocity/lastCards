export const setCards = (cards) => ({
    type: "SET_CARDS",
    payload: cards
});

export const addCard = (deskID) => ({
    type: "ADD_CARD",
    deskID: deskID
});

export const removeCard = (card) => ({
    type: "REMOVE_CARD",
    payload: card
});
export const removeCardsFromDesc = (descID)=> ({
    type: "REMOVE_DESC_CARDS",
    descID: descID
});
