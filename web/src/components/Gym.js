import React from 'react'
import { Container, Button, Segment, Form, TransitionablePortal} from 'semantic-ui-react'

const Gym = ({isFrontSide, setFrontSide, card}) => {
    return (
        <Container>
            <Button.Group>
                <Form.Button disabled={!isFrontSide} content={'Flip over'} onClick={setFrontSide.bind(this, false)}/>
                <Form.Button disabled={isFrontSide} content={'No'} onClick={setFrontSide.bind(this, true)}/>
                <Form.Button disabled={isFrontSide} content={'Yes'} onClick={setFrontSide.bind(this, true)}/>
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