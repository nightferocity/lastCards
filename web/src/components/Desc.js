import React from 'react'
import {Button, Card as CardBase, Grid, Loader, Container, Icon, Segment, Header} from 'semantic-ui-react'
import SetsMenu from "../containers/SetsMenu";
import Card from "../containers/Card"

const Desc = ({addCard, removeCard, isReady, cards, setName, setPage, addSet}) => {
    return (
        <Container fluid>
            <Grid stackable>
                <Grid.Column width={3}>
                    <SetsMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Segment inverted color={"grey"}>
                        <Grid relaxed>
                            <Grid.Column width={4}>
                                <Button.Group>
                                    <Button icon labelPosition='left' color={'teal'}>
                                        <Icon name='cloud upload' />
                                        Save
                                    </Button>
                                    <Button icon labelPosition='right' color={'green'} onClick={setPage.bind(this, 'trainingPage')}>
                                        Start Learn
                                        <Icon name='right arrow' />
                                    </Button>
                                </Button.Group>
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign={'middle'}>
                                <Header inverted textAlign={'center'}>{setName}</Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Button.Group floated={'right'}>
                                    <Button zero
                                            onClick={addSet.bind(this)}
                                            icon labelPosition='left'>
                                        <Icon name='add' />
                                        Add new desk
                                    </Button>
                                    <Button primary
                                            onClick={addCard.bind(this, )}
                                            icon labelPosition='left'>
                                        <Icon name='add' />
                                        Add new card
                                    </Button>
                                    <Button secondary
                                            onClick={removeCard.bind(this, {
                                                "id": 10,
                                                "setId": 1,
                                                "front": "Shadow",
                                                "back": "Тени"
                                            })}
                                            icon labelPosition='right'>
                                        <Icon name='trash alternate' />
                                        Delete
                                    </Button>
                                </Button.Group>
                            </Grid.Column>
                        </Grid>
                    </Segment>
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
        </Container>
    )
};

export default Desc