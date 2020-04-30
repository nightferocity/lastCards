import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Navigation.css';
import StartPage from "../StartPage/StartPage";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "Navigation",
        }
    }
    render() {
        let nav = this.props.navigationElements;
        return (
            <p>Kiil me</p>
        )
    }
}

export default Navigation;