import React from 'react'
import {Button, Card as CardBase, Grid, Loader, Container} from 'semantic-ui-react'
import SetsMenu from "../containers/SetsMenu";
import Card from "../containers/Card"

const Desc = ({addCard, removeCard, isReady, cards}) => {
    return (
        <Container fluid>
            <Grid stackable>
                <Grid.Column width={3} stretched>
                    <SetsMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <CardBase.Group centered>
                        {!isReady ? (
                            <Loader active inline='centered' />
                        ) : cards.map((card, i) => (
                            <Card key={i}{...card}/>
                        ))}
                    </CardBase.Group>
                </Grid.Column>
                <Grid.Column width={1} stretched>
                </Grid.Column>
            </Grid>
            <div>
                <Button primary onClick={addCard.bind(this, {
                    "id": 10,
                    "setId": 1,
                    "front": "Shadow",
                    "back": "Тени"
                })}>Add</Button>
                <Button secondary onClick={removeCard.bind(this, {
                    "id": 10,
                    "setId": 1,
                    "front": "Shadow",
                    "back": "Тени"
                })}>Delete</Button>
            </div>
        </Container>
    )
};

export default Desc