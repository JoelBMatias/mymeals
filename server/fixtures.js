if (Posts.find().count() === 0) {
  Posts.insert({
    day: 'Monday',
    meal: 'Lunch',
    food: 'Eggs'
  });
  
  Posts.insert({
    day: 'Tuesday',
    meal: 'Dinner',
    food: 'Steak with rice'
  });
  
  Posts.insert({
    day: 'Thursday',
    meal: 'Dinner',
    food: 'Tuna with pasta'
  });
}