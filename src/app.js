var angular = require('angular')

angular.module('app',
  [
    require('angular-ui-router')
  ]
)
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '',
      abstract: true,
      template: '<div ui-view></div>'
    })

    $urlRouterProvider.otherwise('/home')
  }])
  .run(function () {
    console.log('AngularJS is running.')
  })

require('./home/home.routes.js')
