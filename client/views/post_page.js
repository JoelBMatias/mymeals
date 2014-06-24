Template.postPage.helpers({
  currentMeals: function() {
    return Meals.findOne(Session.get('currentMealsId'));
  }
});