import React from 'react'
import { Grid, Menu, Segment, Input} from 'semantic-ui-react'


const SetsMenu = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Grid>
        <Grid.Column width={4}>
            <Menu fluid vertical tabular inverted>
                <Menu.Item>
                    <Input placeholder={"Поиск по тегу"}
                           value={searchQuery}
                           onChange={e => setSearchQuery(e.target.value)}
                    />
                </Menu.Item>
                <Menu.Item
                    active={filterBy === '0'}
                    onClick={setFilter.bind(this, '0')}
                >
                    нулевки
                </Menu.Item>
                <Menu.Item
                    active={filterBy === '1'}
                    onClick={setFilter.bind(this, '1')}
                >
                    единички
                </Menu.Item>
                <Menu.Item
                    active={filterBy === '2'}
                    onClick={setFilter.bind(this, '2')}
                >
                    двойки
                </Menu.Item>
            </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
            <Segment>
                This is an stretched grid column. This segment will always match the
                tab height
            </Segment>
        </Grid.Column>
    </Grid>
);

export default SetsMenu;