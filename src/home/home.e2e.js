describe('Home page', function () {
  beforeEach(function () {
    browser.get('/')
  })

  it('should contain a welcome message', function () {
    expect(element(by.css('h1')).isDisplayed()).toBe(true)
  })
})
