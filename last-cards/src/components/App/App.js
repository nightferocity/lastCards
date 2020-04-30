import React from 'react';
import Desk from '../Desk/Desk';
import Footer from '../Footer/Footer.js';
import './App.css';
import StartPage from "../StartPage/StartPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "../Menu/Menu";

class App extends React.Component{
    render(){
        let nav = this.props.navigationElements;

        return (
            <div className="App">
                <Router>
                    <div className="navbar">
                        <ul className="navbar">
                            {Object.keys(nav).map(e => <li className = "nav-item">
                                    <a className = "nav-item" href={nav[e]}>{e}</a>
                                </li>)}
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path={"/menu"} component={Menu} />
                        <Route exact path={"/faq"} component={StartPage} />
                        <Route exact path={"/desk"} component={Desk} />
                        <Route exact path={"/"} component={StartPage} />
                        <Route component={StartPage}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
