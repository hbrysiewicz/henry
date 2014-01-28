App.Controller = Ember.Controller.extend({
  needs: ['login'],
  token: Ember.computed.alias('controllers.login.token')
});
