var angular = require('angular')

angular.module('app')
  .config(homeConfig)

homeConfig.$inject = ['$stateProvider']

function homeConfig ($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/home',
    templateUrl: 'home/home.view.html',
    controller: 'HomeController as home'
  })
}
