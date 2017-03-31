const knex = require('knex');
const bookshelf = require('bookshelf');
const knexConfig = require('../knexfile');

module.exports = bookshelf(knex(knexConfig.development));
