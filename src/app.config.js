var angular = require('angular')

angular.module('app')
  .config(appConfig)

appConfig.$inject = ['$stateProvider', '$urlRouterProvider']

function appConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    template: '<div ui-view></div>'
  })

  $urlRouterProvider.otherwise('/home')
}
