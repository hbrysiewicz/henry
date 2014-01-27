App.Controller = Ember.Controller.extend({
  needs: ['login'],
  token: Ember.computed.alias('controllers.login.token'),
  user: {
    name: "User",
    admin: false,
    icon: 'public/img/avatar.png'
  }
});
