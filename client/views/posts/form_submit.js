Template.form.events({ 'submit form': function(event) {
	event.preventDefault();
var post = {
	day: $(event.target).find('[name=day]').val(),
	meal: $(event.target).find('[name=meal]').val(), 
	food: $(event.target).find('[name=food]').val()
			}
post._id = Posts.insert(post);

Meteor.Router.to('formSubmit', post); 
	}
});