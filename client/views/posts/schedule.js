Template.schedule.tables = function () {
    return MealsOrg;
}


Template.schedule.tableSettings = function () {


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

Template.schedule.events = {
  'click btn btn-primary': function () { 
    MealsOrg.remove({meal: 'Lunch', meal: "Dinner"});
  }
  
};