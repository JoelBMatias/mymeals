Meteor.Router.add({
  '/': 'main2',
  
  '/posts': 'postsList',
  
	'/schedule': 'schedule',

  
  '/posts/:_id': {
    to: 'postsPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
    
  '/submit': 'formSubmit'
});