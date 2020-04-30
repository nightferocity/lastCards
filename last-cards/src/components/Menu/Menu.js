import React from "react";
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "Menu",
        }
    }
    render() {
        return (
            <main>
                <h1>Это меню</h1>
                <p>Что тут делать?</p>
            </main>
        )
    }
}

export default Menu;