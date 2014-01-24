// TODO
// - add jshint step
// - add clean step
// - fix watch with express
var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    /**
     * concat all js files needed for app into one
     */
    concat: {
      dist: {
        src : [
          'app/plugins/**/*.js',
          'app/app.js',
          'app/store.js',
          'app/router.js',
          'app/adapter.js',
          'app/helpers/**/*.js',
          'app/routes/authenticated.js',
          'app/routes/**/*.js',
          'app/models/**/*.js',
          'app/controllers/**/*.js',
          'app/components/*.js',
          'app/views/**/*.js'
        ],
        dest : 'public/dist/app.js'
      }
    },

    /**
     * uglify the js file for dist
     */
    uglify: {
      files: {
        'public/dist/app.js' : [
          'public/dist/app.js'
        ]
      }
    },

    /**
     * precompile template assets
     */    
    ember_handlebars: {
      options: {
          processName: function(filePath) {
            var files = filePath.split('/');
            if(files[2] == 'components' || files[2] == 'admin'){
              if(files[2] == 'admin' && files.length > 3){
                var shortFilePath = filePath.replace('app/templates/'+files[2]+'/', '').replace('.hbs', '');
              } else {
                var shortFilePath = filePath.replace('app/templates/', '').replace('.hbs', '');
              }
            } else if (files.length == 3){
              var shortFilePath = filePath.replace('app/templates/', '').replace('.hbs', '');
            } else {
              var shortFilePath = filePath.replace('app/templates/'+files[2]+'/', '').replace('.hbs', '');
            }

            return shortFilePath;
          }
      },
      compile: {
        files: {
          'public/dist/templates.js': 'app/templates/**/*.hbs'
        }
      }
    },

    /**
     * watch js and hbs files for change
     */
    watch: {
      scripts: {
        files: [
          'app/helpers/*.js',
          'app/app.js',
          'app/router.js',
          'app/adapter.js',
          'app/helpers/**/*.js',
          'app/plugins/**/*.js',
          'app/routes/**/*.js',
          'app/controllers/**/*.js',
          'app/models/**/*.js',
          'app/views/**/*.js',
          'app/components/*.js',
          '!public/dist/**/*.js'
        ],
        tasks: ['concat']
      },
      less: {
        files: [
          'app/styles/*.less'
        ],
        tasks: ['less']
      },
      templates: {
        files: [
          'app/templates/**/*.hbs',
          'app/templates/*.hbs'
        ],
        tasks: ['ember_handlebars']
      }
    },

    less: {
      dev: {
        options: {
          paths: ["app/styles"],
          compress: true,
          cleancss: true
        },
        files: {
          "public/assets/css/theme.css": "app/styles/theme.less"
        }
      }
    }

  });
 
  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ember-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // define custom tasks
  grunt.registerTask('default', ['concat','ember_handlebars', 'less', 'watch']);
  grunt.registerTask('dist', ['concat','uglify','ember_handlebars']);
}