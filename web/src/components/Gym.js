import React from 'react'
import { Container, Button, Segment, Form, TransitionablePortal} from 'semantic-ui-react'

const Gym = ({isFrontSide, setFrontSide, card}) => {
    return (
        <Container>
            <Button.Group>
                <Form.Button disabled={!isFrontSide} content={'Принять поражение'} onClick={() => setFrontSide(false)}/>
                <Form.Button disabled={isFrontSide} content={'Не знаю'} onClick={() => setFrontSide(true)}/>
                <Form.Button disabled={isFrontSide} content={'Знаю'} onClick={() => setFrontSide(true)}/>
            </Button.Group>
            <TransitionablePortal open={isFrontSide}>
                <Segment placeholder
                         style={{ left: '25%', position: 'fixed', top: '25%', zIndex: 1000, width: '50%',}}
                         textAlign={'center'}
                >
                    <h1>{card.front}</h1>
                </Segment>
            </TransitionablePortal>
            <TransitionablePortal open={!isFrontSide}>
                <Segment placeholder
                         style={{ left: '25%', position: 'fixed', top: '25%', zIndex: 1000 , width: '50%'}}
                         textAlign={'center'}
                >
                    <h1>{card.back}</h1>
                </Segment>
            </TransitionablePortal>
        </Container>
    )
};

export default Gym