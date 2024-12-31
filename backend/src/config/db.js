const {Model} = require('objection')
const knex = require('knex')
const knexfile = require('./knexfile')

const db = knex(knexfile)

Model.knex(db)

module.exports = db