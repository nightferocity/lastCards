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
        return(

            <Container fluid>
                <Menu/>
                <Desc/>
            </Container>
        )
    }
}

export default App;