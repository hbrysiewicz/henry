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
    this.resource('executive', function() {
      this.route('dashboard');
      this.route('ltv');
    });
    this.resource('product', function() {
      this.route('orders');
      this.route('gateway');
      this.route('dataProviders');
    });
    this.resource('marketting', function() {
      this.route('trafficSources');
      this.route('affiliates');
    });
    this.resource('accounting', function() {
      this.route('products');
    });
  });

});

