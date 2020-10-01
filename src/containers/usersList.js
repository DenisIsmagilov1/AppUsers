import React from 'react'
import store from '../stores/UserStore'
import { observer } from 'mobx-react'

const UsersList = observer(() => {
  return (
    !store.getUsers.length ?
      <tr>
        <td>Empty</td>
        <td>Empty</td>
        <td>Empty</td>
      </tr>
      :
      store.getUsers.map((user, index) => {
        return (

          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.city}</td>
          </tr>
        )
      })
  )
}
)

export default UsersList
