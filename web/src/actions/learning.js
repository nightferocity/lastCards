export const setFrontSide = (side, cards) => ({
    type: "SET_CARD_SIDE",
    payload: side,
    cards: cards
});

export const takeNextCard = () =>  ({
    type: "TAKE_NEXT_CARD",
});