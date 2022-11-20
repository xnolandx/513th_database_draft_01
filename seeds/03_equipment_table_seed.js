/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('equipment_table').del()
  await knex('equipment_table').insert([
    {id: 1, name: 'Equipment 1', personnel_id: 1},
    {id: 2, name: 'Equipment 2', personnel_id: 1},
    {id: 3, name: 'Equipment 3', personnel_id: 1},
    {id: 4, name: 'Equipment 4', personnel_id: 2},
    {id: 5, name: 'Equipment 5', personnel_id: 2},
    {id: 6, name: 'Equipment 6', personnel_id: 2},
    {id: 7, name: 'Equipment 7', personnel_id: 3},
    {id: 8, name: 'Equipment 8', personnel_id: 3},
    {id: 9, name: 'Equipment 9', personnel_id: 3},
    {id: 10, name: 'Equipment 10', personnel_id: 4},
    {id: 11, name: 'Equipment 11', personnel_id: 4},
    {id: 12, name: 'Equipment 12', personnel_id: 4},
    {id: 13, name: 'Equipment 13', personnel_id: 5},
    {id: 14, name: 'Equipment 14', personnel_id: 5},
    {id: 15, name: 'Equipment 15', personnel_id: 5},
    {id: 16, name: 'Equipment 16', personnel_id: 6},
    {id: 17, name: 'Equipment 17', personnel_id: 6},
    {id: 18, name: 'Equipment 18', personnel_id: 6},
    {id: 19, name: 'Equipment 19', personnel_id: 7},
    {id: 20, name: 'Equipment 20', personnel_id: 7},
    {id: 21, name: 'Equipment 21', personnel_id: 7},
    {id: 22, name: 'Equipment 22', personnel_id: 8},
    {id: 23, name: 'Equipment 23', personnel_id: 8},
    {id: 24, name: 'Equipment 24', personnel_id: 8}
  ]);
};


// {id: 1, name: 'Figaro', food_type_id: 2, pet_type_id: 2},
// {id: 2, name: 'Fat Sam', food_type_id: 3, pet_type_id: 3},
// {id: 3, name: 'Moki', food_type_id: 3, pet_type_id: 3},
// {id: 4, name: 'Cleo', food_type_id: 4, pet_type_id: 4}
