exports.seed = function(knex) {
    return knex('recipes').insert([
      {name: 'Fried Chicken'},
      {name: 'Shrimp Lo Main'},
    ]);
};