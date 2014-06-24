Template.postsList.helpers({
  meals: function() {
    return Meals.find();
  }
});