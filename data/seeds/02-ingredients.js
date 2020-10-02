exports.seed = function(knex) {
    return knex('ingredients').insert([
      {name: "2 Whole Chickens", recipes_id: 1 },
      {name: "2 Cups Buttermilk", recipes_id: 1},
      {name: "5 Tbsp Salt", recipes_id: 1},
      {name: "4 Tbsp Lemon Pepper", recipes_id: 1},
      {name: "2 tsp Paprika", recipes_id: 1},
      {name: "6 Cups Flour", recipes_id: 1},
      {name: "Oil", recipes_id: 1},
      
      {name: "12 Oz Shrimp (21-25 per lb)", recipes_id: 2},
      {name: "3 Tbsp Soy Sauce", recipes_id: 2},
      {name: "1 tsp Sesame Oil", recipes_id: 2},
      {name: "1/2 medium Yellow Onion", recipes_id: 2},
      {name: "12 Oz Broccoli", recipes_id: 2},
      {name: "2 Cloves Garlic", recipes_id: 2},
      {name: "8 Oz Lo Mein or Udon Noodles", recipes_id: 2},
      {name: "1/4p tps Salt", recipes_id: 2},
      {name: "3 Tbsp Vegetable Oil", recipes_id: 2},
      {name: "2 Tbsp Water", recipes_id: 2},
     
    ]);
};