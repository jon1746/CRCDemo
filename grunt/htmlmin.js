module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'app/views/',
          src: ['*.html', '**/*.html'],
          dest: 'dist/views/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}