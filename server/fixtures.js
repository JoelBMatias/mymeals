if (Meals.find().count() === 0) {
  Meals.insert({
    name: 'Tuna Salad',
    url: 'http://www.foodnetwork.com/recipes/food-network-kitchens/tuna-salad-recipe.html',
  });
  
  Meals.insert({
    name: 'Curry Fried Rice',
    url: 'http://www.foodnetwork.com/recipes/food-network-kitchens/curry-fried-rice-recipe.html',
  });
  
  Meals.insert({
    name: 'Herb-Roasted Chicken',
    url: 'http://www.foodnetwork.com/recipes/food-network-kitchens/herb-roasted-chicken-recipe.html',
  });
  
  Meals.insert({
    name: 'Lemon and Herb Roast Chicken and Vegetables',
    url: 'http://www.foodnetwork.com/recipes/food-network-kitchens/lemon-and-herb-roast-chicken-and-vegetables.html',
  });

  
  
}
