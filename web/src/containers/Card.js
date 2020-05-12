import Card from "../components/Card";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as chosenActions from "../actions/chosenCards"


const mapStateToProps = () => ({ //{ chosenCards }
    addedCount: 0,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(chosenActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);