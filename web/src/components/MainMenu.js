import React from 'react'
import { Menu as MenuBase} from 'semantic-ui-react'

const Menu = ({count, currentPage, setPage}) => (
    <MenuBase pointing secondary inverted stackable size='massive'>
            <MenuBase.Item
                name={"chosen"}
                content={"Счетчик-тест "+ count}
            />
            <MenuBase.Menu position='right'>
                    <MenuBase.Item
                        content='Start page'
                        active={currentPage === 'startPage'}
                        onClick={setPage.bind(this, 'startPage')}
                    />

                    <MenuBase.Item
                        content='Desk'
                        active={currentPage === 'desk'}
                        onClick={setPage.bind(this, 'desk')}
                    />

                    <MenuBase.Item
                        content='FAQ'
                        active={currentPage === 'faq'}
                        onClick={setPage.bind(this, 'faq')}
                    />
            </MenuBase.Menu>
    </MenuBase>
);

export default Menu;
