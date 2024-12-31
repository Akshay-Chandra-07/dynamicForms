/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('options',(table)=>{
        table.increments('id').primary(),
        table.integer('question_id').unsigned().references('id').inTable('questions').onDelete('cascade').onUpdate('cascade'),
        table.string('option').notNullable()
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('options')
};
