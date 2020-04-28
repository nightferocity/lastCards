import React from 'react';
import Header from '../Header/Header';
import Desk from '../Desk/Desk';
import Footer from '../Footer/Footer.js';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <Desk/>
                <Footer/>
            </div>
        )
    }
}

export default App;
