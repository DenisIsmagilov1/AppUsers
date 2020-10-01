import { makeObservable, observable, computed, action } from 'mobx'

class Store {
  users = [
    {
      name: 'Vasya',
      age: 15,
      city: 'Moscow'
    },
    {
      name: 'Sveta',
      age: 20,
      city: 'London',
    },
    {
      name: 'Egor',
      age: 13,
      city: 'Paris',
    },
    {
      name: 'Dima',
      age: 30,
      city: 'Barcelona',
    },
    {
      name: 'Kate',
      age: 33,
      city: 'Rostov',

    },
    {
      name: 'Nasty',
      age: 40,
      city: 'California',
    },
    {
      name: 'Fedor',
      age: 24,
      city: 'Novgorod',
    },
    {
      name: 'Kirill',
      age: 29,
      city: 'Kaliningrad',
    },
    {
      name: 'Alexander',
      age: 21,
      city: 'New York'
    },
  ]

  constructor() {
    makeObservable(this, {
      users: observable,
      getUsers: computed,
      clearUsers: action,
      addUser: action,
      deleteRandomUser: action,
      sortUsers: action,
    })
  }

  get getUsers() {
    return this.users
  }

  clearUsers() {
    this.users = []
  }

  addUser(user) {
    this.users.push(user)
  }

  deleteRandomUser() {
    const rand = Math.floor(Math.random() * this.users.length)
    this.users.splice(rand, 1)
  }

  sortUsers(field) {
    this.users.sort(({ [field]: u1 }, { [field]: u2 }) => u1 > u2 ? 1 : -1)
  }

}

export default new Store();
