import React from "react";
import Navigation from "../Navigation/Navigation"
import './Header.css';
import logo from './logo.svg';



class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    showLogin = () => {console.log('login button click')};
    render() {
        let nav = this.props.navigationElements;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Navigation navigationElements = {nav}/>
                <button onClick={this.showLogin}>Login</button>
            </header>
        )
    }
}

export default Header;