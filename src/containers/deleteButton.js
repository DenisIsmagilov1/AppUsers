import React from 'react'
import store from '../stores/UserStore'

const DeleteButtons = () => {
    return (
        <div>
            <button onClick={() => store.clearUsers()}>Очистить таблицу</button>
            <button onClick={() => store.deleteRandomUser()}>Удалить случайнго пользователя</button>
        </div>
    )
}

export default DeleteButtons
