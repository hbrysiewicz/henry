App.LoginController = Ember.Controller.extend({
  token: localStorage.token,

  actions: {
    login: function() {
      var self = this,
          data = this.getProperties('username', 'password');

      console.log('login');
      self.set('errorMessage', null);
      $.post('/auth', data).then(function(response) {

        self.set('errorMessage', response.message);
        if (response.success) {
          self.set('token', response.token);

          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          } else {
            self.transitionToRoute('index');
          }
        }
      });
    }
  },

  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

  reset: function() {
    this.setProperties({
      username: "",
      password: "",
      errorMessage: ""
    });
  }
});
