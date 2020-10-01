import React from 'react'
import store from '../stores/UserStore'


const HeaderSort = () => {

    return (
        <tr>
            <th onClick={() => store.sortUsers('name')}>Name &#8595;</th>
            <th onClick={() => store.sortUsers('age')} >Age &#8595;</th>
            <th onClick={() => store.sortUsers('city')}>City &#8595;</th>
        </tr>
    )
}

export default HeaderSort
