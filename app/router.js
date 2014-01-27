App.Router.reopen({
  location: 'history'
});

App.Router.map(function() {

  this.route('login');
  this.route('logout');
  this.route('signup');

  this.resource('user', function() {
    this.route('settings', {path: '/settings/:id'});
  });

  this.resource('bi', function() {
    this.route('company');
  });

  // Admin Routes
  this.resource('admin', function() {
    this.resource("users", function(){
      this.route("create", { path: '/create' });
      this.route("edit", { path: '/edit/:id' });
    });
    this.resource("roles", function(){
      this.route("create");
      this.route("edit", { path: '/edit/:id' });
    });
    this.resource("resources", function(){
      this.route("create");
      this.route("edit", { path: '/edit/:id' });
      this.route("delete", { path: '/delete/:id' });
    });
  })
});

