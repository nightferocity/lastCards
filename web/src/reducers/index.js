import {combineReducers} from "redux";
import cards from "./cards";
import chosenCards from "./chosenCards";
import filter from "./filter";

export default combineReducers({
    cards,
    chosenCards,
    filter,
});