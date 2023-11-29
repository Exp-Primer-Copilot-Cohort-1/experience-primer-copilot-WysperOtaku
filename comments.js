// Create web server with express
// Create a route to get all comments
// Create a route to add a comment
// Create a route to delete a comment
// Export the router
const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils');
const crypto = require('crypto');

router.get('/', (request, response) => {
    const statement = `select id, name, email, comment, timestamp from comment order by timestamp desc`;
    const connection = db.connect();
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data));
    })
})

router.post('/', (request, response) => {
    const { name, email, comment } = request.body;

    const statement = `insert into comment (name, email, comment, timestamp) values ('${name}', '${email}', '${comment}', now())`;
    const connection = db.connect();
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data));
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params;

    const statement = `delete from comment where id = ${id}`;
    const connection = db.connect();
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data));
    })
})

module.exports = router;