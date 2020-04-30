import React from 'react';
//import Header from '../Header/Header';
//import Desk from '../Desk/Desk';
//import Footer from '../Footer/Footer.js';
import Menu from '../Menu/Menu.js';
import './App.css';
import ButtonStart from "../StartButton/ButtonStart";

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Menu/>
                <ButtonStart/>
            </div>
        )
    }
}

export default App;
