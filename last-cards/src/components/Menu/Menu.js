import React from "react";
import style from "./Menu.css"

class Menu extends React.Component {

    backToMenu = () => {
        alert("Перебросить на начальную страницу")
    };

    makeAndSet = () => {
        alert("Перебросить в меню редактирования карт");
    };

    getFAQ = () => {
        alert("Показать справку разработчиков (из дурки) о работе приложения.");
    };

    SignIn = () => {
        alert("Открыть форму входа");
    };



render() {
        let className = "menuPanel";
        return (
            <div style={style} className={className}>
                <div className="block" onClick={this.backToMenu}>Menu</div>
                <div className="block" onClick={this.makeAndSet}>Make Set</div>
                <div className="block" onClick={this.getFAQ}>FAQ</div>
                <div className="block" onClick={this.SignIn}>Sign In</div>
            </div>
        );


    }
}

export default Menu;