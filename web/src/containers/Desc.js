import Desc from "../components/Desc";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as cardsActions from '../actions/cards'; //подрубаем все actions
import * as pagesActions from "../actions/pages"
import * as setsActions from "../actions/sets"
import * as filterActions from "../actions/filter";
import * as learningActions from "../actions/learning";


const sortBy = (cards, filterBy, searchQuery) => {
    let finded;
    switch (filterBy) {
        case "all":
            finded = cards;
            break;
        default:{
            finded = cards.filter(card => card.setId === (Number).parseFloat(filterBy));
        }
    }
    if (searchQuery === "")
        return finded;
    else
        return finded.filter(card =>
            card.front.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            card.back.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
        );
};

function findSetName(setId, sets) {
    let set = sets.filter(set => setId === set.id);
    return  set.length ? set[0].name : "Все карты";
}



const mapStateToProps = ({filter, cards, sets, chosenCards}) => {
    return {
    addCard: filter.addCard,
    removeCard: filter.removeCard,
    isReady: cards.isReady,
    cards: cards.items && sortBy(cards.items, filter.filterBy, filter.searchQuery),
    setName: findSetName(filter.filterBy, sets.items),
    descId: filter.filterBy,
    gameCards: chosenCards.items
    };
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardsActions, dispatch),
    ...bindActionCreators(pagesActions, dispatch),
    ...bindActionCreators(setsActions,dispatch),
    ...bindActionCreators(filterActions, dispatch),
    ...bindActionCreators(learningActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Desc);