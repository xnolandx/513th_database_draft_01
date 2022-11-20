/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('location_table', table => {
      table.increments();
      table.string('lat', 250);
      table.string('lon', 250);
      table.string('mgrs', 250);
      table.string('country', 250);
      table.timestamp('timestamp', 250);
      table.integer('personnel_id');
      table.foreign('personnel_id').references('personnel_table.id');
      table.integer('team_id');
      table.foreign('team_id').references('team_table.id');
      table.integer('equipment_id');
      table.foreign('equipment_id').references('equipment_table.id')
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
    return knex.schema.alterTable('location_table', table => {
        table.dropForeign('team_id')
    }).then(function() {
        return knex.schema.alterTable('location_table', table => {
            table.dropForeign('personnel_id')
    }).then(function() {
        return knex.schema.alterTable('location_table', table => {
            table.dropForeign('equipment_id')
        })
    }).then(function() {
        return knex.schema.dropTableIfExists('location_table');
    });
    })
};



// exports.down = function(knex) {
//     return knex.schema.alterTable('equipment_table', table => {
//         table.dropForeign('personnel_id')
//     }).then(function() {
//         return knex.schema.dropTableIfExists('equipment_table');
//     });
// };
