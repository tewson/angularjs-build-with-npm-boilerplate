module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'mocha'],
    files: [
      'src/app.js',
      'build/templates.bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/app.js': ['browserify'],
      'src/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true
    }
  })
}
