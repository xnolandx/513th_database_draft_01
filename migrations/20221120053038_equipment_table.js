/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('equipment_table', table => {
      table.increments();
      table.string('name', 250);
      table.integer('personnel_id');
      table.foreign('personnel_id').references('personnel_table.id'); 
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
    return knex.schema.alterTable('equipment_table', table => {
        table.dropForeign('personnel_id')
    }).then(function() {
        return knex.schema.dropTableIfExists('equipment_table');
    });
};
