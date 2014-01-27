App.LogoutRoute = Ember.Route.extend({
  beforeModel: function(controller, context) {
    this.controllerFor('login').set('token', '');
    this.transitionTo('login');
  }
});
