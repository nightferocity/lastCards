import SetsMenu from "../components/SetsMenu";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as filterActions from '../actions/filter';


const mapStateToProps = ({filter, sets}) => ({
    filterBy: filter.filterBy,
    sets: sets.items,
    isReady: sets.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetsMenu);