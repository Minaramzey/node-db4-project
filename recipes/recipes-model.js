const db = require("../data/db-config");

module.exports = {
    getRecipes,
    findById,
    getShoppingList,  
    getInstructions,
  };

  function getRecipes() {
    return db
    .select('*')
    .from('recipes')
}
function findById(id) {
    return db("recipes")
      .where({ id })
      .first();
  }

function getShoppingList(recipe_id) {
    return db
    .select('ingredients.name')
    .from('recipes')
    .join('ingredients', 'recipes.id', 'ingredients.recipes_id')
    .where('recipes.id', '=', recipe_id)
}

function getInstructions(recipe_id) {
    return db
    .select('steps.steps')
    .from('recipes')
    .join('steps', 'recipes.id', 'steps.recipes_id')
    .where('recipes_id', '=', recipe_id)
} 