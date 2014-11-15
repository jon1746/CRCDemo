module.exports = {
    dev: {
        nonull: true,
        files: [

            // Include bower JS dependencies

            // angular
            {src: "bower_components/angular/angular.js", dest: "app/vendor/angular/angular.js"},
            {src: "bower_components/angular-animate/angular-animate.js", dest: "app/vendor/angular/angular-animate/angular-animate.js"},
            {src: "bower_components/angular-cookies/angular-cookies.js", dest: "app/vendor/angular/angular-cookies/angular-cookies.js"},            
            {src: "bower_components/angular-resource/angular-resource.js", dest: "app/vendor/angular/angular-resource/angular-resource.js"},
            {src: "bower_components/angular-sanitize/angular-sanitize.js", dest: "app/vendor/angular/angular-sanitize/angular-sanitize.js"},
            {src: "bower_components/angular-touch/angular-touch.js", dest: "app/vendor/angular/angular-touch/angular-touch.js"},
          
            // bootstrap
            {src: "bower_components/bootstrap/dist/css/bootstrap.css", dest: "app/styles/bootstrap.css"},
            {src: "bower_components/bootstrap/dist/js/bootstrap.js", dest: "app/vendor/jquery/bootstrap.js"},
            {src: "**", dest: "app/fonts", cwd: 'bower_components/bootstrap/fonts', expand : true},

            // fontawesome
            {src: "bower_components/font-awesome/css/font-awesome.min.css", dest: "app/styles/font-awesome.min.css"},
            {src: "**", dest: "app/fonts", cwd: 'bower_components/font-awesome/fonts', expand : true},

            // libs
            {src: "bower_components/moment/min/moment.min.js", dest: "app/vendor/libs/moment.min.js"},
            {src: "bower_components/screenfull/dist/screenfull.min.js", dest: "app/vendor/libs/screenfull.min.js"},

            // angular-strap
            {src: "bower_components/angular-strap/dist/angular-strap.js", dest: "app/vendor/angular/angular-strap/angular-strap.js"},
            {src: "bower_components/angular-strap/dist/angular-strap.tpl.js", dest: "app/vendor/angular/angular-strap/angular-strap.tpl.js"},
            {src: "bower_components/angular-motion/dist/angular-motion.css", dest: "app/styles/angular-motion.css"},

            // core
            {src: "bower_components/angular-ui-router/release/angular-ui-router.js", dest: "app/vendor/angular/angular-ui-router/angular-ui-router.js"},
            {src: "bower_components/angular-translate/angular-translate.js", dest: "app/vendor/angular/angular-translate/angular-translate.js"},
            {src: "bower_components/angular-ui-utils/ui-utils.js", dest: "app/vendor/angular/angular-ui-utils/ui-utils.js"},
            {src: "bower_components/ngstorage/ngStorage.js", dest: "app/vendor/angular/ngstorage/ngStorage.js"},
            {src: "bower_components/oclazyload/dist/ocLazyLoad.js", dest: "app/vendor/angular/oclazyload/ocLazyLoad.js"},
            {src: "bower_components/angular-bootstrap/ui-bootstrap-tpls.js", dest: "app/vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js"},
            {src: "bower_components/angular-loading-bar/build/loading-bar.js", dest: "app/vendor/angular/angular-loading-bar/loading-bar.js"},
            {src: "bower_components/angular-loading-bar/build/loading-bar.css", dest: "app/styles/loading-bar.css"},
            
            // modules for lazy load
            {src: "bower_components/angular-ui-select/dist/select.min.js", dest: "app/vendor/modules/angular-ui-select/select.min.js"},

            {src: "bower_components/textAngular/dist/textAngular.min.js", dest: "app/vendor/modules/textAngular/textAngular.min.js"},
            {src: "bower_components/textAngular/dist/textAngular-sanitize.min.js", dest: "app/vendor/modules/textAngular/textAngular-sanitize.min.js"},

            {src: "bower_components/venturocket-angular-slider/build/angular-slider.min.js", dest: "app/vendor/modules/angular-slider/angular-slider.min.js"},
            
            {src: "bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", dest: "app/vendor/modules/angular-bootstrap-nav-tree/abn_tree_directive.js"},
            {src: "bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css", dest: "app/vendor/modules/angular-bootstrap-nav-tree/abn_tree.css"},

            {src: "bower_components/angular-file-upload/angular-file-upload.min.js", dest: "app/vendor/modules/angular-file-upload/angular-file-upload.min.js"},

            {src: "bower_components/ngImgCrop/compile/minified/ng-img-crop.js", dest: "app/vendor/modules/ngImgCrop/ng-img-crop.js"},
            {src: "bower_components/ngImgCrop/compile/minified/ng-img-crop.css", dest: "app/vendor/modules/ngImgCrop/ng-img-crop.css"},

            {src: "bower_components/angular-smart-table/dist/smart-table.min.js", dest: "app/vendor/modules/angular-smart-table/smart-table.min.js"},

            {src: "bower_components/angular-ui-map/ui-map.js", dest: "app/vendor/modules/angular-ui-map/ui-map.js"},

        ]
    },
    dist: {
        files: [
            {expand: true, dest: 'dist/', src:'**', cwd:'app/'},
            {dest: 'dist/index.html', src:'app/index.min.html'}
        ]
    }
};