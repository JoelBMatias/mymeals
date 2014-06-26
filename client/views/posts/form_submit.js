Template.formSubmit.tables = function () {
    return MealsOrg;
}

Template.formSubmit.tableSettings = function () {
    return {
        rowsPerPage: 10,
        showFilter: false,
        showNavigation: 'auto',
       fields: [
            { key: 'date', label: 'date' },
            { key: 'meal', label: 'Meal' },
            { key: 'food', label: 'Food' }
        ],
    };
}

Template.formSubmit.events({ 

'submit form': function(event) {

event.preventDefault();

var post = {
	date: $(event.target).find('[name=date]').val(),
	meal: $(event.target).find('[name=meal]').val(), 
	food: $(event.target).find('[name=food]').val()
	

			}



post._id = MealsOrg.insert(post);
alert("Your food has been added!");

//Meteor.Router.to('formSubmit'); 
	},



});