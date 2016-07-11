var angular = require('angular')

angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.home', {
      url: '/home',
      template: '<div>Home</div>'
    })
  }])
