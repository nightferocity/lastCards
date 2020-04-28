import React from "react";
import './Navigation.css';

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
            <nav className = "Main-nav">
                <h1>{this.state.title}</h1>
                <ul className="navElems">
                {Object.keys(nav).map(e => <li>
                    <a className = "navElem" href={nav[e]}>{e}</a>
                </li>)}
                </ul>
            </nav>
        )
    }
}

export default Navigation;