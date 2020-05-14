import {combineReducers} from "redux";
import cards from "./cards";
import chosenCards from "./chosenCards";
import filter from "./filter";
import sets from "./sets";
import pages from "./pages";
import learning from "./learning";

export default combineReducers({
    cards,
    chosenCards,
    filter,
    sets,
    pages,
    learning
});