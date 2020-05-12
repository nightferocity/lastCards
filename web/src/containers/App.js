import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as cardsActions from '../actions/cards'; //подрубаем все actions
import * as setsActions from "../actions/sets"
import App from "../components/App";

const mapStateToProps = () => ({ //принимает состояние хранилища и прокидывает в сам App через connect ниже

});

const mapDispatchToProps = dispatch => ({ //объединяем actions
    ...bindActionCreators(cardsActions, dispatch), //пробегается по actions из cards
    ...bindActionCreators(setsActions, dispatch)
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