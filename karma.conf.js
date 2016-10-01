module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'mocha'],
    files: [
      'src/app.js',
      'scripts/unit-test-setup.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/app.js': ['browserify'],
      'scripts/unit-test-setup.js': ['browserify'],
      'src/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true
    }
  })
}
