import {combineReducers} from "redux";
import cards from "./cards";
import chosenCards from "./chosenCards";
import filter from "./filter";
import sets from "./sets"

export default combineReducers({
    cards,
    chosenCards,
    filter,
    sets,
});