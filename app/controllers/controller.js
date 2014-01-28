App.Controller = Ember.Controller.extend({
  needs: ['login'],
  token: Ember.computed.alias('controllers.login.token'),
  user: function() {
    return App.User.find(1);
  }.property()
});
