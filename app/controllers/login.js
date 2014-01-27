App.LoginController = Ember.Controller.extend({
  token: localStorage.token,

  actions: {
    login: {
      var self = this,
          data = this.getProperties('username', 'password');

      self.set('errorMessage', null);
      Ember.$.post('/auth.json', data).then(function(response) {

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
    },

    tokenChanged: function() {
      localStorage.token = this.get('token');
    }.observes('token'),

    reset: {
      this.setProperties({
        username: "",
        password: "",
        errorMessage: ""
      });
    }
  }
})