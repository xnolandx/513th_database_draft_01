/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('personnel_table', table => {
      table.increments();
      table.string('name', 250);
      table.integer('team_id');
      table.foreign('team_id').references('team_table.id'); 
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
    return knex.schema.alterTable('personnel_table', table => {
        table.dropForeign('team_id')
    }).then(function() {
        return knex.schema.dropTableIfExists('personnel_table');
    });
};
