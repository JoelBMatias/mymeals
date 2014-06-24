Meteor.publish('meals', function() {
  return Meals.find();
});

Meteor.publish('mealsOrg', function() {
  return MealsOrg.find();
});