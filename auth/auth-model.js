const db = require('../database/dbConfig');

module.exports = {
    getUsers,
    addUser,
    findBy,
    remove
}

function getUsers(){
    return db('users')
}

function addUser(user) {
    return db('users')
    .insert(user, 'id');
}

function findBy(username) {
    return db('users')
    .where(username)
}

function remove(id) {
    return db('users')
    .where({id})
    .del()
}