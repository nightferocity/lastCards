import Desc from "../components/Desc";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as cardsActions from '../actions/cards'; //подрубаем все actions

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


const mapStateToProps = ({filter, cards}) => ({
    addCard: filter.addCard,
    removeCard: filter.removeCard,
    isReady: cards.isReady,
    cards: cards.items && sortBy(cards.items, filter.filterBy, filter.searchQuery),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Desc);