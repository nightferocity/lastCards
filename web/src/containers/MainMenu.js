import MainMenu from "../components/MainMenu";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as chosenActions from "../actions/chosenCards"
import * as pageActions from "../actions/pages"


const mapStateToProps = ({ chosenCards, pages }) => ({
    count: chosenCards.items.length,
    currentPage: pages.currentPage,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(chosenActions, dispatch),
    ...bindActionCreators(pageActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);