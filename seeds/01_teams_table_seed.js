/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE team_table CASCADE')
  await knex('team_table').del()
  await knex('team_table').insert([
    {id: 1, name: 'Alpha'},
    {id: 2, name: 'Bravo'},
    {id: 3, name: 'Charlie'},
    {id: 4, name: 'Delta'}
  ]);
};
