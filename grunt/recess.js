module.exports = {
	app: {
        files: {
          'app/styles/app.css': [
            'app/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    min: {
        files: {
            'dist/styles/app.min.css': [
                'app/styles/bootstrap.css',
                'app/styles/bootstrap-additions.css',
                'app/styles/font-awesome.min.css',
                'app/styles/*.css',
            ]
        },
        options: {
            compress: true
        }
    }
}