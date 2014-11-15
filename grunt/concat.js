module.exports = {
	dist:{
    src:[
      'app/vendor/jquery/jquery.min.js',
      'app/vendor/angular/angular.js',
      'app/vendor/angular/**/*.js',
      'app/scripts/*.js',
      'app/scripts/directives/*.js',
      'app/scripts/services/*.js',
      'app/scripts/filters/*.js'
    ],
    dest:'dist/scripts/dist.js'
  }
}