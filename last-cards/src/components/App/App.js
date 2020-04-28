import React from 'react';
import Header from '../Header/Header';
import Desk from '../Desk/Desk';
import Footer from '../Footer/Footer.js';
import './App.css';

class App extends React.Component{
    render(){
        let nav = this.props.navigationElements;

        return (
            <div className="App">
                <Header navigationElements = {nav}/>
                <Desk name="Мама"/>
                <Footer/>
            </div>
        );
    }
}

export default App;
