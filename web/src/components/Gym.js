import React from 'react'
import { Container, Button, Segment, Form, TransitionablePortal} from 'semantic-ui-react'

const Gym = ({isFrontSide,takeNextCard, gameCard, isLastCard}) => {
    function eventOneCLick() {
        if (!isLastCard) takeNextCard();
        isFrontSide = true;
    }

    return (
        <Container>
            <Button.Group>
                <Form.Button  content={'Знаю'} onClick={ () =>  isFrontSide = false }/>
                <Form.Button  content={'Не знаю'} disabled={isLastCard} onClick = { () => {
                    eventOneCLick()
                }}/>
                <Form.Button  content={'Верно'} disabled={isLastCard} onClick = { () => {
                    eventOneCLick()
                }}/>
                <Form.Button  content={'Не верно'} disabled={isLastCard} onClick = { () => {
                    eventOneCLick()
                }}/>
            </Button.Group>
            <TransitionablePortal open={isFrontSide}>
                <Segment placeholder
                         style={{ left: '25%', position: 'fixed', top: '25%', zIndex: 1000, width: '50%',}}
                         textAlign={'center'}
                >
                    <h1>{gameCard.front}</h1>
                </Segment>
            </TransitionablePortal>
            <TransitionablePortal open={!isFrontSide}>
                <Segment placeholder
                         style={{ left: '25%', position: 'fixed', top: '25%', zIndex: 1000 , width: '50%'}}
                         textAlign={'center'}
                >
                    <h1>{gameCard.back}</h1>
                </Segment>
            </TransitionablePortal>
        </Container>
    )
};

export default Gym