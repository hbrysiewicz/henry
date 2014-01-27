App.AuthenticatedRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    if (!this.controllerFor('login').get('token')) {
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var loginController= this.controllerFor('login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('login');
  },

  getJSONwithToken: function() {
    var token = this.controllerFor('login').get('token');
    return $.getJSON(url, {token: token});
  },

  actions: {
    error: function(reason, transition) {
      if (reason.status == 401) {
        this.redirectToLogin(transition);
      } else {
        alert('Something went wrong');
      }
    }
  }
});
