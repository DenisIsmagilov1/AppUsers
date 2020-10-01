import React, { useState } from 'react'
import store from '../stores/UserStore'

const Form = () => {

    const [newUser, setNewUser] = useState({})

    const HandlerOnChangeName = (e) => {
        setNewUser({
            ...newUser,
            name: e.target.value
        })

    }
    const HandlerOnChangeAge = (e) => {
        setNewUser({
            ...newUser,
            age: e.target.value
        })
    }
    const HandlerOnChangeCity = (e) => {
        setNewUser({
            ...newUser,
            city: e.target.value
        })
    }

    const HandlerAdd = (e) => {
        e.preventDefault()
        store.addUser(newUser)
        setNewUser({})

    }
    return (
        <form onSubmit={HandlerAdd} >
            <label>
                Name<br />
                <input
                    type="text"
                    value={newUser.name || ''}
                    onChange={HandlerOnChangeName}
                    required
                />
            </label>
            <label>
                Age<br />
                <input
                    type="number"
                    value={newUser.age || ''}
                    onChange={HandlerOnChangeAge}
                    required
                />
            </label>
            <label>
                City<br />
                <input
                    type="text"
                    value={newUser.city || ''}
                    onChange={HandlerOnChangeCity}
                    required
                />
            </label>

            <button type="submit" >Добавить</button>
        </form>
    )
}

export default Form
