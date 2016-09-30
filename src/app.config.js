var angular = require('angular')

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '',
      abstract: true,
      template: '<div ui-view></div>'
    })

    $urlRouterProvider.otherwise('/home')
  }])
