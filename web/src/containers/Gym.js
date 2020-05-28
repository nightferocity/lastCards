import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as learningActions from "../actions/learning";
import Gym from "../components/Gym"


const mapStateToProps = ({learning}) => ({ //принимает состояние хранилища и прокидывает в сам App через connect ниже
    isFrontSide : learning.isFrontSide,
    gameCard : learning.item[learning.numberCard],
    isLastCard : learning.isLastCard
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(learningActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gym);