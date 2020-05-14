import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as learningActions from "../actions/learning";
import Gym from "../components/Gym"

const mapStateToProps = ({learning, cards}) => ({ //принимает состояние хранилища и прокидывает в сам App через connect ниже
    isFrontSide : learning.isFrontSide,
    card : cards.items[2],
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(learningActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gym);