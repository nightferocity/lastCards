import React from 'react'
import {Button, Card as CardBase, Grid, Loader, Container, Icon, Segment, Header} from 'semantic-ui-react'
import SetsMenu from "../containers/SetsMenu";
import Card from "../containers/Card"

const Desc = ({addCard, isReady, cards, setName, setPage, addSet, descId, removeSet, removeCardsFromDesc, setFilter}) => {
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
                                    <Button icon labelPosition='right' color={'green'} onClick={ () => setPage('trainingPage') }>
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
                                            onClick={() => addSet()}
                                            icon labelPosition='left'>
                                        <Icon name='add' />
                                        Add new desc
                                    </Button>
                                    <Button primary
                                            disabled={!Number.isInteger(descId)}
                                            onClick={() => addCard(descId)}
                                            icon labelPosition='left'>
                                        <Icon name='add' />
                                        Add new card
                                    </Button>
                                    <Button secondary
                                            disabled={!Number.isInteger(descId)}
                                            onClick={ () => {
                                                removeSet(descId);
                                                removeCardsFromDesc(descId);
                                                setFilter("all");
                                                }
                                            }
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