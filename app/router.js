import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyTodosENV.locationType
});

Router.map(function() {
});

export default Router;
