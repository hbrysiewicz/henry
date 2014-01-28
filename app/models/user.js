App.User = Ember.Model.extend({
  firstName: Ember.attr(),
  lastName: Ember.attr(),
  role: Ember.attr(),
  username: Ember.attr(),
  email: Ember.attr(),
  icon: Ember.attr(),
  admin: Ember.computed.equal('role',4),

  name: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName','lastName'),

  avatar: function() {
    return this.get('icon') || '/assets/img/avatar.png';
  }.property('icon')
});

App.User.adapter = Ember.FixtureAdapter.create();

App.User.FIXTURES = [
  {
    id: 1,
    firstName: "Heather",
    lastName: "Brysiewicz",
    role: 4,
    username: 'admin',
    email: "heather.brysiewicz@thecontrolgroup.com",
    icon: null
  },
  {
    id: 2,
    firstName: "Andrew",
    lastName: "Reedy",
    role: 7,
    username: 'andrew',
    email: "andrew.reedy@thecontrolgroup.com",
    icon: null
  }
];