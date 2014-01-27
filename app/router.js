App.Router.reopen({
  location: 'history'
});

App.Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');
});

