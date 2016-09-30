var angular = require('angular')

angular.module('app')
  .controller('HomeController', HomeController)

function HomeController () {
  this.welcomeMessage = 'Home'
}
