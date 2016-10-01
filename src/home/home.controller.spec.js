var expect = require('chai').expect

describe('HomeController', function () {
  beforeEach(function () {
    angular.mock.module('app')
    angular.mock.inject(function ($controller) {
      this.HomeController = $controller('HomeController')
    })
  })

  it('should exist', function () {
    expect(this.HomeController).to.not.be.undefined
  })

  it('should have a welcome message', function () {
    expect(this.HomeController.welcomeMessage).to.be.a('string')
    expect(this.HomeController.welcomeMessage).to.not.be.empty
  })
})
