import React from 'react'
import { Button, Card as CardBase} from 'semantic-ui-react'


const Card = (card) => {
    const {front ,back, addToChosen, changeCard, removeCard} = card;
    return (
        <CardBase>
            <CardBase.Content>
                <CardBase.Header>{front}</CardBase.Header>
                <CardBase.Meta>[{front}]</CardBase.Meta>
            </CardBase.Content>
            <CardBase.Content extra>
                <CardBase.Header>{back}</CardBase.Header>
                <CardBase.Meta>[{back}]</CardBase.Meta>
            </CardBase.Content>
            <CardBase.Content extra>
                <div className='ui three buttons'>
                    <Button basic color='green'
                            onClick={ () => addToChosen(card)}>
                        Pick
                    </Button>
                    <Button basic color='green' onClick={ () => changeCard(card)}>
                        Change
                    </Button>
                    <Button basic color='red' onClick={ () => removeCard(card)}>
                        Delete
                    </Button>
                </div>
            </CardBase.Content>
        </CardBase>
    )
};

export default Card