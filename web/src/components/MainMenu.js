import React from 'react'
import { Menu as MenuBase} from 'semantic-ui-react'

const Menu = ({count}) => (
    <MenuBase pointing secondary inverted stackable size='massive'>
        <MenuBase.Item
            name='editorials'
            content='Start page'
        />

        <MenuBase.Item
            name='reviews'
            content='Desk'
        />

        <MenuBase.Item
            name='upcomingEvents'
            content='FAQ'
        />

        <MenuBase.Menu position={"right"}>
                <MenuBase.Item
                        name={"chosen"}
                        content={"Выделенные карты: "+ count}
                />
        </MenuBase.Menu>
    </MenuBase>
);

export default Menu;
