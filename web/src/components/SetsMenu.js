import React from 'react'
import { Menu, Input, Loader } from 'semantic-ui-react'


const SetsMenu = ({ setFilter, filterBy, searchQuery, setSearchQuery, isReady, sets }) => (

    <Menu pointing secondary vertical inverted>
        <Menu.Item>
            <Input placeholder={"Поиск"}
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)}
                   icon='search'
            />
        </Menu.Item>
        {!isReady ? (
                <Loader active inline='centered'/> )
            : sets.map((set, i) => (
                <Menu.Item
                    active={filterBy === set.id}
                    onClick={() => setFilter(set.id)}
                >
                    {sets[i].name}
                </Menu.Item>
            ))}
    </Menu>
);

export default SetsMenu;