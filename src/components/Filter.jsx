import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setQuery}) => {
        return(
            <Menu secondary className={'filter'}>
                <Menu.Item
                    name='all'
                    active={filterBy === 'all'}
                    onClick={setFilter.bind(this, 'all')}
                >Все</Menu.Item>
                <Menu.Item
                    name='costly'
                    active={filterBy === 'costly'}
                    onClick={setFilter.bind(this, 'costly')}
                >Цена (дорогие)</Menu.Item>
                <Menu.Item
                    name='cheap'
                    active={filterBy === 'cheap'}
                    onClick={setFilter.bind(this, 'cheap')}
                >Цена (дешевые)</Menu.Item>
                <Menu.Item
                    name='author'
                    active={filterBy === 'Автор'}
                    onClick={setFilter.bind(this, 'author')}
                >Автор</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' onChange={e => setQuery(e.target.value)} value={searchQuery} placeholder='...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            )
    };

export default Filter