import {combineReducers} from "redux";
import cards from "./cards";
import chosenCards from "./chosenCards";
import filter from "./filter";
import sets from "./sets";
import pages from "./pages";
import learning from "./learning";

// export default reduceReducers(
export default combineReducers({
    cards,
    chosenCards,
    filter,
    sets,
    pages,
    learning,
});
//  (state, action) => {
//     switch (action.type) {
//         case 'REMOVE_DESC_CARDS': {
//             const cards = cards;
//             const desc = sets;
//         }
//         case "REMOVE_SET": {
//             const customers = state.items;
//             const filters = state.filters;
//         }
//     }
// }
// );
