import React from 'react'
import { Container, Header, Icon, Segment} from 'semantic-ui-react'

const NotFound = () => {
    return (
        <Container textAlign={"center"}>
            <Segment placeholder color={"orange"} inverted size={"massive"}>
                <Header icon>
                    <Icon name='bug' />
                    Sorry! Temporary doesn't work.
                </Header>
            </Segment>
        </Container>
    )
};

export default NotFound