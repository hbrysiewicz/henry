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

  // Business Intelligence
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

  // Split Testing
  this.resource('split', function() {
    this.resource('icm', function() {
      this.route('test');
      this.route('variation');
      this.route('event');
      this.route('section');
    });
    this.resource('rp', function() {
      this.route('test');
      this.route('variation');
      this.route('event');
      this.route('section');
    });
    this.resource('ud', function() {
      this.route('test');
      this.route('variation');
      this.route('event');
      this.route('section');
    });
    this.resource('fqh', function() {
      this.route('test');
      this.route('variation');
      this.route('event');
      this.route('section');
    });
  });

  // Affiliate Management
  this.resource('affiliate', function() {
    this.resource('affiliate', function() {
      this.route('active');
      this.route('archied');
    });
    this.route('campaign');
    this.route('pixel');
    this.route('mapper');
    this.route('disowner');
  });

  // Customer Feedback
  this.route('customer');

});

