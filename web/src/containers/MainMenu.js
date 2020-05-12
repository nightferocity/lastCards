import MainMenu from "../components/MainMenu";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as chosenActions from "../actions/chosenCards"


const mapStateToProps = ({ chosenCards }) => ({
    count: chosenCards.items.length
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(chosenActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);