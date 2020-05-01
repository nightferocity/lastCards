import React from "react";
import style from "./Menu.css"

const reducerMenu = (state, action) => {
    return state;
}

const createStore = reducer => {
    let state = (
        <div style={style} className={"menuPanel"}>
            <div className="block" onClick={() => alert("Нажата кнопка Make Set")}>Menu</div>
            <div className="block" onClick={() => alert("Нажата кнопка Make Set")}>Make Set</div>
            <div className="block" onClick={() => alert("Нажата кнопка FAQ")}>FAQ</div>
            <div className="block" onClick={() => alert("Нажата кнопка Sign In")}>Sign In</div>
        </div>
    );
    const getState = () => state;
    let listeners = [];
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    const subscribe = listener => {
        listeners.push(listener);
        return () => { listeners = listeners.filter(item => item !== listener); };
    };
    return { getState, dispatch, subscribe };
};

const menuStore = createStore(reducerMenu);
ReactDom.render(<Menu store={menuStore} />, document.getElementById('menu'));

class Menu extends React.Component {
    dispatch(action) {
        this.setState(prevState => reducerMenu(prevState, action));
    }
    state = reducerMenu(undefined, () => alert("Блин!"));

    backToMenu = () => this.dispatch(alert("Функция которая ничего не делает"));
    makeAndSet = () => this.dispatch(() => alert("Функция, которая переводит в режим редактирования колоды"));
    getFAQ = () => this.dispatch(() => alert("Функция отображающая справку"));
    SignIn = () => this.dispatch(() => alert("Функция входа"));

render() {
        return this.state;
    }
}

export default Menu;