Meteor.Router.add({
  '/': 'formSubmit',
  
  '/posts': 'postPage',
  
  '/posts/:_id': {
    to: 'postPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  
  '/submit': 'postSubmit'
});