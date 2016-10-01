exports.config = {
  seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
  baseUrl: 'http://localhost:9000',
  specs: ['src/**/*.e2e.js']
}
