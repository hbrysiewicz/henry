App.Controller = Ember.Controller.extend({
  needs: ['login'],
  token: Ember.computed.alias('controllers.login.token'),
  user: Ember.Object.extend({
    id: 1,
    firstName: "Heather",
    lastName: "Brysiewicz",
    email: "heather.brysiewicz@thecontrolgroup.com",
    admin: true,
    icon: '/assets/img/avatar.png',
    name: function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName','lastName')
  }).create()
});
