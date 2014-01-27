App.AuthenticatedRoute = Ember.Route.extend({

  beforeModel: function() {},

  redirectToLogin: function() {},

  getJSONwithToken: function() {},

  actions: {
    error: function(reason, transition) {
      if (reason.status == 401) {
        this.redirectToLogin(transition);
      } else {
        alert('Something went wrong');
      }
    }
  }
})