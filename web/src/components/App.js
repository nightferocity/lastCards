import React from 'react';
import axios from "axios";
import Card from '../containers/Card'
import SetsMenu from "../containers/SetsMenu";
import Menu from '../containers/MainMenu';
import {Container, Card as CardBase, Button} from "semantic-ui-react";

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
    //handleClick(){
    //
    //}
    render() {
        const {cards, isReady, addCard, removeCard} = this.props;
        const card = {
            "id": 12,
            "setId": 3,
            "front": "Plastic",
            "back": "Пластик"
        };
        return(
            <Container>
            <Menu/>
            <SetsMenu />
                <div>
                    <Button primary onClick={addCard.bind(this, card)}>Add</Button>
                    <Button secondary onClick={removeCard.bind(this, card)}>Delete</Button>
                </div>
            <CardBase.Group>
                {!isReady ? "Загрузка" : cards.map((card, i) => (
                    <Card key={i}{...card}/>
                ))}
            </CardBase.Group>
            </Container>
        )
    }
}

export default App;