import SetsMenu from "../components/SetsMenu";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as filterActions from '../actions/filter';


const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetsMenu);