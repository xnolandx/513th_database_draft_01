/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('location_table').del()
  await knex('location_table').insert([
    {id: 1, lat: '15.2833327', lon: '45.4166669', mgrs: '38P NB 44735 89707', country: 'Yemen', timestamp: '2022-11-20T06:13:39', personnel_id: 1, team_id: 1, equipment_id: 3},
    {id: 2, lat: '33.3116861', lon: '44.355905', mgrs: '38S MB 40043 86026', country: 'Iraq', timestamp: '2022-10-20T06:44:34', personnel_id: 1, team_id: 1, equipment_id: 1},
    {id: 3, lat: '37.5638561', lon: '126.9740863', mgrs: '52S CG 21072 59354', country: 'South Korea', timestamp: '2021-06-27T04:37:45', personnel_id: 8, team_id: 4, equipment_id: null},
    {id: 4, lat: '31.5016946', lon: '34.4668445', mgrs: '36R XV 39302 86136', country: 'Israel', timestamp: '2022-01-08T20:20:56', personnel_id: 5, team_id: 3, equipment_id: 15},
    {id: 5, lat: '29.3760652', lon: '47.9818668', mgrs: '38R QT 89444 53348', country: 'Kuwait', timestamp: '2021-07-30T05:11:23', personnel_id: null, team_id: 4, equipment_id: 19}
  ]);
};
