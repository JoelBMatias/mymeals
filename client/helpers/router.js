Meteor.Router.add({
  '/': 'formSubmit',
  
  '/posts': 'postsList',
  
  '/posts/:_id': {
    to: 'postsPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  
  '/submit': 'postSubmit'
});