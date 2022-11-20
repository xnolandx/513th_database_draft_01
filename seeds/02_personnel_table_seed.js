/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('personnel_table').del()
  await knex('personnel_table').insert([
    {id: 1, name: 'Soldier 1', team_id: 1},
    {id: 2, name: 'Soldier 2', team_id: 1},
    {id: 3, name: 'Soldier 3', team_id: 2},
    {id: 4, name: 'Soldier 4', team_id: 2},
    {id: 5, name: 'Soldier 5', team_id: 3},
    {id: 6, name: 'Soldier 6', team_id: 3},
    {id: 7, name: 'Soldier 7', team_id: 4},
    {id: 8, name: 'Soldier 8', team_id: 4}
  ]);
};


// {id: 1, name: 'Figaro', food_type_id: 2, pet_type_id: 2},
// {id: 2, name: 'Fat Sam', food_type_id: 3, pet_type_id: 3},
// {id: 3, name: 'Moki', food_type_id: 3, pet_type_id: 3},
// {id: 4, name: 'Cleo', food_type_id: 4, pet_type_id: 4}