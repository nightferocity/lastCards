import React from 'react';
import axios from "axios";
import Menu from '../containers/MainMenu';
import Desc from '../containers/Desc'
import {Container} from "semantic-ui-react";

class App extends React.Component{
    componentDidMount() { //перед отображением полюзователю сотвори эту херню
        const {setCards, setSets} = this.props;
        axios.get('/sets.json').then(({data}) => {
            setSets(data);
        });
        axios.get('/cards.json').then(({data}) => {
            setCards(data);
        });
    }

    render() {
        let {currentPage} = this.props;
        switch(currentPage) {
            case 'mainPage':
                return(<Container fluid><Menu/></Container>);
            case 'desk':
                return(<Container fluid><Menu/><Desc/></Container>);
            case 'faq':
                return(<Container fluid><Menu/></Container>);
            default:
                return(<Container fluid><Menu/></Container>);
        }
    }
}

export default App;