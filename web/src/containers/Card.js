import Card from "../components/Card";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as chosenActions from "../actions/chosenCards"
import * as cardActions from "../actions/cards"


const mapStateToProps = () => ({ //{ chosenCards }
    addedCount: 0,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(chosenActions, dispatch),
    ...bindActionCreators(cardActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);