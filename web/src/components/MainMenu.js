import React from 'react'
import { Menu as MenuBase} from 'semantic-ui-react'

const Menu = ({count, currentPage, setPage, setFilter}) => (
    <MenuBase pointing secondary inverted stackable size='massive'>
        <MenuBase.Item
            name={"chosen"}
            content={"Выбранные карты "+ count}
            onClick = {() => {
                setPage('desk');
                setFilter("game");
            }}
        />
        <MenuBase.Menu position='right'>
            <MenuBase.Item
                content='Start page'
                active={currentPage === 'startPage'}
                onClick={() => setPage('startPage')}
            />

            <MenuBase.Item
                content='Desk'
                active={currentPage === 'desk'}
                onClick={() => setPage('desk')}
            />

            <MenuBase.Item
                content='FAQ'
                active={currentPage === 'faq'}
                onClick={() => setPage('faq')}
            />
        </MenuBase.Menu>
    </MenuBase>
);

export default Menu;
