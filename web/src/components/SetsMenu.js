import React from 'react'
import { Grid, Menu, Segment, Input} from 'semantic-ui-react'


const SetsMenu = ({ setFilter, filterBy, searchQuery, setSearchQuery, isReady, sets }) => (
    <Grid>
        <Grid.Column width={4}>
            <Menu.Item>
                <Input placeholder={"Поиск"}
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}
                />
            </Menu.Item>
            <Menu fluid vertical tabular>
                {!isReady ? "Загрузка" : sets.map((set, i) => (
                    <Menu.Item
                        active={filterBy === set.id}
                        onClick={setFilter.bind(this, set.id)}
                    >
                        {sets[i].name}
                    </Menu.Item>
                ))}
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