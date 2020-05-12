import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as cardsActions from '../actions/cards'; //подрубаем все actions
//import * as filterActions from '../actions/filter';
import App from "../components/App";
//import filter from 'lodash';

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


const mapStateToProps = ({cards, filter}) => ({ //принимает состояние хранилища и прокидывает в сам App через connect ниже
    cards: cards.items && sortBy(cards.items, filter.filterBy, filter.searchQuery),
    isReady: cards.isReady
});

const mapDispatchToProps = dispatch => ({ //объединяем actions
    ...bindActionCreators(cardsActions, dispatch), //пробегается по actions из cards
});
// ({ //возвращает ations как объект
//     setCards: cards => dispatch(setCards(cards)),   //при вызове setCards вызывается dispatch в который проикидывается объект из actions cards.js
//                                                     //вместо setCards по сути:
//                                                     // {
//                                                     //     type: "SET_CARDS",
//                                                     //         payload: cards
//                                                     // }
//     addCard: card => dispatch(addCard(card)),
//     removeCard: card => dispatch(removeCard(card)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(App); //подключаем map'ы к самому App, всю херню искать в this.