exports.seed = function(knex) {
    return knex('steps').insert([
      {steps: 'Cut the whole chickens into 4 breasts, 4 thighs, 4 legs and 4 wings and set aside.', recipes_id: 1},
      {steps: 'Preheat your oil, in either a heavy pan on the stove or a deep-fryer, to 325 degrees F.', recipes_id: 1},
      {steps: 'Pour the buttermilk into another bowl large enough for the chicken to be immersed in the buttermilk.', recipes_id: 1},
      {steps: 'Prepare your dredging station. Place your chicken in a bowl. Next to that, your bowl of buttermilk, and next to that, your dry mixture.', recipes_id: 1},
      {steps: 'Take your breasts, lightly dust them with your flour mixture, then dip them in the buttermilk until they are coated, and then place them in the flour mixture.', recipes_id: 1},
      {steps: 'Take the breasts that are in the flour mixture and aggressively push the flour mixture into the wet chicken. Make sure that the chicken in very thoroughly coated, or you will not achieve the crust and crunch you are looking for. Gently place the breasts in your hot oil.', recipes_id: 1},
      {steps: 'Next, repeat the dredging steps with your other pieces of chicken in this order: thigh, leg then wing.', recipes_id: 1},
      {steps: 'When you place the last wing into the fryer, you should have 16 pieces of chicken in the oil. Set a timer for 15 minutes.', recipes_id: 1},
      {steps: 'After 15 minutes, take a probe thermometer and check the temperature of a breast. If it reads 180 degrees F, all of your chicken is done. (Keep in mind that it will continue to cook after it has been removed from the fryer.', recipes_id: 1},
      {steps: 'Remove the chicken from the oil and let it drain for 5 minutes. Let cool for an additional 10 minutes before serving.', recipes_id: 1},
      
      
      
      {steps: 'Bring a large pot of salted water to a boil over medium-high heat. Meanwhile, make the sauce and prep the vegetables.', recipes_id: 2},
      {steps: 'Stir 3 tablespoons soy sauce, 1 tablespoon Shaoxing wine or dry sherry, 1 teaspoon packed brown sugar, and 1 teaspoon sesame oil together in a small bowl until the sugar is dissolved to make the sauce; set aside.', recipes_id: 2},
      {steps: 'Thinly slice 1/2 medium yellow onion, cut 1 large broccoli crown into small 1-inch florets (about 5 cups), and mince 2 garlic cloves. Thinly slice 1 scallion for garnish if desired.', recipes_id: 2},
      {steps: 'Add 8 ounces lo mein or udon noodles to the boiling water and cook according to package directions. Meanwhile, pat 1 pound cleaned shrimp dry with paper towels and season with 1/4 teaspoon kosher salt. Heat 1 tablespoon of the vegetable oil in a large nonstick skillet or wok over medium-high until shimmering. Add the shrimp in a single layer, and sear until browned on the bottom, about 2 minutes (they will not be cooked through). Transfer to a large plate and take the pan off the heat if the noodles aren’t ready yet.', recipes_id: 2},
      {steps: 'When the noodles are ready, drain in a colander and run under cold water until cooled. Set aside to drain while you cook the vegetables.', recipes_id: 2},
      {steps: 'Heat the remaining 2 tablespoons oil in the pan over medium-high heat until shimmering. Add the onion, season with salt, and stir-fry until starting to brown, 2 to 3 minutes. Add the broccoli and garlic, season with salt, and toss to combine. Add 2 tablespoons water, cover, and cook, stirring every minute or so, until the broccoli is bright green and crisp-tender, 2 to 3 minutes.', recipes_id: 2},
      {steps: 'Uncover and add the noodles and reserved shrimp and any accumulated juices. Cook, tossing constantly, until the shrimp are just cooked through and the noodles are warmed through, about 2 minutes. Pour in the sauce and toss until it evenly coats the noodles and vegetables, about 1 minute. Garnish with the scallions if desired and serve.', recipes_id: 2} 
    ]);
};