export const addToChosen = (card) => ({
    type: "ADD_CARD_TO_CHOSEN",
    payload: card
});

export const removeFromChosen = (id) => ({
    type: "REMOVE_CARD_FROM_CHOSEN",
    payload: id
});

export const changeCard = (card) => ({
    type: "CHANGE_CARD",
    payload : card,
    front : prompt("Введите отображаемое слово!", "Время"),
    back : prompt("Введите угадываемый текст!", "Time")
});